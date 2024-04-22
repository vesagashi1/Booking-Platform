const express = require('express');
const mssql = require('mssql');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const config = {
  server: 'localhost',
  database: 'BookingAppDB',
  options: {
    trustedConnection: true,
    enableArithAbort: true,
  },
};

// Create a database connection pool
const poolPromise = new mssql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL');
    return pool;
  })
  .catch(err => {
    console.error('Database connection error:', err);
    process.exit(1); // Exit the process if database connection fails
  });

// Handle POST request for registering a new partner
app.post('/api/partner', async (req, res) => {
  try {
    const { name, email, ageConfirm, sellOption } = req.body;
    console.log('Received registration request:', { name, email, ageConfirm, sellOption });

    const pool = await poolPromise; // Get the database connection pool from the promise

    const request = pool.request();

    const query = `
      INSERT INTO Partners (name, email, ageConfirm, sellOption)
      VALUES (@name, @email, @ageConfirm, @sellOption)
    `;

    request.input('name', mssql.NVarChar(255), name);
    request.input('email', mssql.NVarChar(255), email);
    request.input('ageConfirm', mssql.Bit, ageConfirm === 'true' ? 1 : 0);
    request.input('sellOption', mssql.NVarChar(50), sellOption);

    const result = await request.query(query);

    console.log('Registration successful');
    res.status(200).json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Error inserting data into database:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
