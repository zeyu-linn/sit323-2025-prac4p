const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON body
app.use(express.json());

// Welcome route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Calculator Microservice',
    endpoints: {
      addition: '/api/add?num1=x&num2=y',
      subtraction: '/api/subtract?num1=x&num2=y',
      multiplication: '/api/multiply?num1=x&num2=y',
      division: '/api/divide?num1=x&num2=y'
    }
  });
});

// Addition endpoint
app.get('/api/add', (req, res) => {
  try {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    
    // Validate inputs
    if (isNaN(num1) || isNaN(num2)) {
      return res.status(400).json({ 
        error: 'Invalid input. Both num1 and num2 must be valid numbers.' 
      });
    }
    
    const result = num1 + num2;
    res.json({ 
      operation: 'addition',
      num1,
      num2,
      result 
    });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred during calculation.' });
  }
});

// Subtraction endpoint
app.get('/api/subtract', (req, res) => {
  try {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    
    // Validate inputs
    if (isNaN(num1) || isNaN(num2)) {
      return res.status(400).json({ 
        error: 'Invalid input. Both num1 and num2 must be valid numbers.' 
      });
    }
    
    const result = num1 - num2;
    res.json({ 
      operation: 'subtraction',
      num1,
      num2,
      result 
    });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred during calculation.' });
  }
});

// Multiplication endpoint
app.get('/api/multiply', (req, res) => {
  try {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    
    // Validate inputs
    if (isNaN(num1) || isNaN(num2)) {
      return res.status(400).json({ 
        error: 'Invalid input. Both num1 and num2 must be valid numbers.' 
      });
    }
    
    const result = num1 * num2;
    res.json({ 
      operation: 'multiplication',
      num1,
      num2,
      result 
    });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred during calculation.' });
  }
});

// Division endpoint
app.get('/api/divide', (req, res) => {
  try {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    
    // Validate inputs
    if (isNaN(num1) || isNaN(num2)) {
      return res.status(400).json({ 
        error: 'Invalid input. Both num1 and num2 must be valid numbers.' 
      });
    }
    
    // Check for division by zero
    if (num2 === 0) {
      return res.status(400).json({ 
        error: 'Division by zero is not allowed.' 
      });
    }
    
    const result = num1 / num2;
    res.json({ 
      operation: 'division',
      num1,
      num2,
      result 
    });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred during calculation.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Calculator microservice running on port ${PORT}`);
});