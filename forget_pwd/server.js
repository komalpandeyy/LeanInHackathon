const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sharmamuskaan1801@gmail.com', // Your Gmail address
    pass: '20075570042' // Your Gmail password
  }
});

// Route for sending OTP
app.post('/send-otp', async (req, res) => {
  const { email } = req.body;

  // Generate OTP (you can use any method to generate OTP)
  const otp = Math.floor(100000 + Math.random() * 900000);

  const mailOptions = {
    from: 'sharmamuskaan1801@gmail.com',
    to: email,
    subject: 'Password Reset OTP',
    text: `Your OTP for password reset is: ${otp}`
   
  };

  try {
    // Send email with OTP
    await transporter.sendMail(mailOptions);
    res.status(200).send('OTP sent to your email. Please check your inbox.');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

// Route for resetting password
app.post('/reset-password', async (req, res) => {
  const { email, newPassword } = req.body;

  // In this example, newPassword is received from the client
  // You might want to hash the password for security before saving it

  // Simulate database update or validation
  // Here, we are just logging the email and new password
  console.log(`New password for ${email}: ${newPassword}`);

  // Respond with success message
  res.status(200).send('Password reset successful.');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
