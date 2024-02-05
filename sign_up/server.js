const express = require('express');
const oracledb = require('oracledb');

const app = express();
const PORT = process.env.PORT || 3000;

// Oracle DB Connection Config
const dbConfig = {
  user: 'system',
  password: 'cscorner',
  connectString: 'localhost:1521/XE', // Your Oracle DB connection string
};

// Connect to Oracle DB
async function connectToDatabase() {
  try {
    await oracledb.createPool(dbConfig);
    console.log('Connected to Oracle Database');
  } catch (error) {
    console.error('Error connecting to Oracle Database:', error.message);
    process.exit(1); // Exit the application if database connection fails
  }
}

// Middleware to parse JSON request bodies
app.use(express.json());

// Route to retrieve contents of the users table
app.get('/users', async (req, res) => {
  try {
    const connection = await oracledb.getConnection();
    const result = await connection.execute(
      `desc users`
    );
    await connection.close();
    // console.log('Retrieved users:', result.rows);
    // res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error retrieving users:', error.message);
    res.status(500).json({ error: 'Error retrieving users', message: error.message });
  }
});

// Define a route handler for the root route (/)
app.get('/', (req, res) => {
  res.send('Welcome to the Oracle Database API');
});

// Start the server
async function startServer() {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

startServer();
