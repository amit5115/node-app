const express = require('express');
const bodyParser = require('body-parser');

// Import routes
const dbRoutes = require('./routes/dbRoutes');
const s3Routes = require('./routes/s3Routes');
const sqsRoutes = require('./routes/sqsRoutes');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/db', dbRoutes);  // Route for RDS
app.use('/s3', s3Routes);  // Route for S3
app.use('/sqs', sqsRoutes); // Route for SQS

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
