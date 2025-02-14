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

    filePath = "C:/Users/obenn/OneDrive/Pictures/Screenshots/" + fileName;

    try {
        // ✅ Ensure the file exists before proceeding
        if (!fs.existsSync(filePath)) {
            console.error("File does not exist:", filePath);
            return "error";
        }

        // ✅ Read the file as a stream
        const fileStream = fs.createReadStream(filePath);

        // ✅ Ensure correct MIME type (adjust based on file format)
        const contentType = "image/*";

        // Upload using the `Upload` class (recommended for large files)
        const uploadParams = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: fileName,
            Body: fileStream,
            ContentType: contentType,
        };

        const upload = new Upload({
            client: s3Client,
            params: uploadParams,
        });

        const result = await upload.done();
        console.log("File uploaded successfully:");

        return result.Location; // ✅ Return the public URL

    } catch (err) {
        console.error("Error uploading file:", err);
        return "error";
    }
};
// Export function to get a signed URL for downloading a file from AWS S3
exports.getFileUrlFromAws = async (fileName, expireTime = null) => {
    try {
        // Check if the file is available in the AWS S3 bucket
        const check = await this.isFileAvailableInAwsBucket(fileName); 

        if (check) {
            // Create a GetObjectCommand to retrieve the file from S3
            const command = new GetObjectCommand({
                Bucket: process.env.AWS_BUCKET_NAME, // Specify the AWS S3 bucket name
                Key: fileName, // Specify the file name
            });

            // Generate a signed URL with expiration time if provided
            if (expireTime != null) {
                const url = await getSignedUrl(s3Client, command, { expiresIn: expireTime });
                return url;
            } else {
                // Generate a signed URL without expiration time
                const url = await getSignedUrl(s3Client, command);
                return url;
            }
        } else {
            // Return an error message if the file is not available in the bucket
            return "error";
        }
    } catch (err) {
        // Handle any errors that occur during the process
        console.log('here2');

        console.log("error ::", err);
        return "error";
    }
};

exports.isFileAvailableInAwsBucket = async (fileName) => {
  try {
      // Check if the object exists
      await s3Client.send(new HeadObjectCommand({
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: fileName,
      }));

      // If the object exists, return true
      return true;
  } catch (err) {
      if (err.name === 'NotFound') {
          // File not found in AWS bucket, return false
          return false;
      } else {
          // Handle other errors
          return false;
      }
  }
};

exports.deleteFileFromAws = async (fileName) => {
    try {
      // Configure the parameters for the S3 upload
      const uploadParams = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: fileName,
      };
      // Upload the file to S3
        await s3Client.send(new DeleteObjectCommand(uploadParams)).then((data)=>{
      });
  
    } catch (err) {
        console.log('here3');

      console.error('Error ', err);
      return  'error';
    }
};