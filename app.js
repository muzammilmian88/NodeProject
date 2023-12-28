
const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const authenticateToken = require('./Problem5');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const secretKey = process.env.SECRET_KEY;

app.use(express.json());

// Generate a JWT token on login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Implement your authentication logic here (e.g., check username and password against a database)
  // For simplicity, this example just generates a token with a username payload

  const token = jwt.sign({ username }, secretKey, { expiresIn: '30m' });
  res.json({ token });
});

// Protected endpoint - requires authentication
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Access granted to protected resource', user: req.user });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
