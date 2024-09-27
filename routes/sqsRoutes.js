const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
const sqs = new AWS.SQS();

// Example: Send a message to SQS (with dummy data)
router.post('/send', (req, res) => {
  const params = {
    QueueUrl: 'https://sqs.us-west-2.amazonaws.com/123456789012/my-queue', // Replace with your actual SQS queue URL
    MessageBody: req.body.message || 'Test message from Node.js API' // Use a message from request or dummy data
  };

  sqs.sendMessage(params, (err, data) => {
    if (err) return res.status(500).send(err);
    res.send(`Message sent successfully, MessageId: ${data.MessageId}`);
  });
});

module.exports = router;
