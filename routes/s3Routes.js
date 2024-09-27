const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

// Example: Upload file to S3 (with dummy data)
router.post('/upload', (req, res) => {
  const params = {
    Bucket: 'my-app-bucket', // Replace with your actual S3 bucket name
    Key: req.body.fileName || 'dummyfile.txt', // Provide a file name from request or use dummy data
    Body: req.body.fileContent || 'Hello, this is a test file.' // Provide file content from request or use dummy content
  };

  s3.upload(params, (err, data) => {
    if (err) return res.status(500).send(err);
    res.send(`File uploaded successfully: ${data.Location}`);
  });
});

module.exports = router;
