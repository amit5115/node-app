const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// Set up MySQL connection with AWS RDS (dummy data)
const connection = mysql.createConnection({
  host: 'mydb-instance1.xyz123abc.us-west-2.rds.amazonaws.com', // Replace with your actual RDS endpoint
  user: 'admin', // Replace with your actual DB username
  password: 'password123', // Replace with your actual DB password
  database: 'mydatabase' // Replace with your actual DB name
});

// Test RDS connection
router.get('/test', (req, res) => {
  connection.query('SELECT 1 + 1 AS solution', (error, results) => {
    if (error) throw error;
    res.send(`Database connected! The solution is: ${results[0].solution}`);
  });
});

module.exports = router;
