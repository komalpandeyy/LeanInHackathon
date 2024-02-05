const express = require('express');
const oracledb = require('oracledb');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Oracle DB Connection Configuration
const dbConfig = {
  user: 'system',
  password: 'cscorner',
  connectString: 'localhost:1521/XE'
};

// Nodemailer Configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // Update with your email service provider
  auth: {
    user: 'sharmamuskaan1801@gmail.com', // Update with your email address
    pass: '20075570042' // Update with your email password
  }
});

// Route to handle user registration
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Insert user into Oracle DB
    const connection = await oracledb.getConnection(dbConfig);
    const query = `INSERT INTO users (email, password) VALUES (:email, :password)`;
    await connection.execute(query, [email, password], { autoCommit: true });
    await connection.close();

    // Send registration email to the user
    const mailOptions = {
      from: 'sharmamuskaan1801@gmail.com', // Update with your email address
      to: email,
      subject: 'Registration Successful',
      text: 'Congratulations! Your registration was successful.'
    };
    await transporter.sendMail(mailOptions);

    res.status(200).send('Registration successful. Confirmation email sent.');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('An error occurred during registration.');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

