const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Portfolio Backend is running');
});

// Contact form API endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Here you would typically save to a database or send an email
  // For now, we just log it and send a success response
  console.log('Received contact message:', { name, email, message });
  
  res.status(200).json({ 
    success: true, 
    message: 'Message received successfully!' 
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
