const app = express();
const port = process.env.PORT || 3000;

// Configure AWS SDK
AWS.config.update({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const s3 = new AWS.S3();
const upload = multer({ storage: multer.memoryStorage() });

// API Endpoint to upload a file to S3
app.post('/upload', upload.single('file'), async (req, res) => {
    const params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: req.file.originalname,
        Body: req.file.buffer,
    };

    try {
        const data = await s3.upload(params).promise();
        res.status(200).send({ message: 'File uploaded successfully', data });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
