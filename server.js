const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Email transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'services.html'));
});

app.get('/faq', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'faq.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/careers', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'careers.html'));
});

app.get('/downloads', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'downloads.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'We received your message - Pacific ABA Academy',
      html: `
        <h2>Thank you for contacting Pacific ABA Academy</h2>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>Pacific ABA Academy Team</p>
      `
    });

    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Chatbot endpoint
app.post('/api/chat', (req, res) => {
  const { message } = req.body;

  // Simple chatbot responses
  const responses = {
    'hello': 'Hello! Welcome to Pacific ABA Academy. How can I help you today?',
    'services': 'We offer on-site group programs, private assessments, and more. Visit our Services page to learn more.',
    'contact': 'You can reach us at 778-565-1064 or email office@pacificaba.com',
    'phone': 'You can call us at 778-565-1064',
    'number': 'Our phone number is 778-565-1064',
    'call': 'Please call us at 778-565-1064',
    'hours': 'Please contact us at 778-565-1064 for our current hours and availability.',
    'autism': 'We provide scientifically validated ABA treatment for individuals diagnosed with Autism and related disabilities.',
    'aba': 'ABA (Applied Behavior Analysis) is a scientifically validated approach to help individuals with Autism and related disabilities develop important skills.',
    'enrollment': 'To enroll in our programs, please contact us at 778-565-1064 or email office@pacificaba.com',
    'funding': 'Many families are eligible for funding through Autism Funding Unit (AFU). Please contact us at 778-565-1064 to discuss funding options.',
    'default': 'Thank you for your question. Please visit our FAQ page or contact us at 778-565-1064 for more information.'
  };

  const lowerMessage = message.toLowerCase();
  let response = responses.default;

  // Check for matches in order of specificity
  const keywords = Object.keys(responses);
  for (const key of keywords) {
    if (key !== 'default' && lowerMessage.includes(key)) {
      response = responses[key];
      break;
    }
  }

  res.json({ response });
});

// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT}`);
});
