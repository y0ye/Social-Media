// Import necessary modules from AWS SDK
require("dotenv").config();

const { Upload } = require("@aws-sdk/lib-storage");
const { S3Client, DeleteObjectsCommand, GetObjectCommand, ListObjectsV2Command, HeadObjectCommand, PutObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const fs = require('fs');


// Initialize an S3 client with provided credentials
const s3Client = new S3Client({
    region: process.env.AWS_REGION, // Specify the AWS region from environment variables
    credentials: {
        accessKeyId: process.env.AWS_ACCESSKEYID, // Access key ID from environment variables
        secretAccessKey: process.env.AWS_SECRETACCESSKEY // Secret access key from environment variables
    }
});

// Export folder names for easier reference
exports.awsFolderNames = {
    sub1: 'sub1',
    sub2: 'sub2'
};

// Upload function using `Upload` utility
exports.uploadFileToAws = async (fileName, filePath) => {
    try {
      // Configure the parameters for the S3 upload
      const uploadParams = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: fileName,
        Body: fs.createReadStream(filePath),
        ACL: 'public-read' 
      };
  
      // Upload the file to S3
        await s3Client.send(new PutObjectCommand(uploadParams)).then((data)=>{
      });
  
    } catch (err) {
      console.error('Error ', err);
      return 'error';
    }
};