const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config(); // Load environment variables from a .env file

const app = express();

// Set up a proxy route
app.use(
  '/', // Change this route to match the desired endpoint
  createProxyMiddleware({
    target: 'https://mainnet.infura.io/v3/487e87a62b4543529a6fd0bbaef2020f',
    changeOrigin: true,
    secure: true,
  })
);

// Start the server
const port = process.env.PORT || 8545; // Use the provided port from the environment or default to 8545
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});