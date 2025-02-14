// s3Use.js - File for utilizing AWS S3 functions

// Import the module for AWS S3 functions
const awss3connect = require("./awsS3connect");

// Function to upload a file to AWS S3 bucket
exports.uploadFileToAwsS3 = async function(dataObject) {
    try {
        // Define the path where the file will be saved locally
        const savePath = `uploads/abcd.txt`;
        
        // Upload the file to AWS S3 bucket in the specified subfolder
        const awsLink = await awss3connect.uploadFileToAws(dataObject.fileName, dataObject.filePath);

        return awsLink; // ✅ Return the AWS S3 file URL

    } catch (error) {
        console.error("Error uploading file to AWS S3:", error);
        throw error;
    }
}

// Function to retrieve a file from AWS S3 bucket as a URL
exports.getFileFromAwsS3 = async function(dataObject) {
    try {
        const fileName = `abcd.txt`; // Specify the file name

        // Get the file URL with default expiration time (15 minutes)
        const fileUrl = await awss3connect.getFileUrlFromAws(`${awss3connect.awsFolderNames.sub1}/${fileName}`);
        console.log("File URL:", fileUrl);

        // Set custom expiration time for the file URL (2 years from now)
        const expirationDate = new Date();
        expirationDate.setFullYear(expirationDate.getFullYear() + 1);
        const fileUrl1 = await awss3connect.getFileUrlFromAws(`${awss3connect.awsFolderNames.sub1}/${fileName}`, expirationDate);
        console.log("Custom Expiry File URL:", fileUrl1);
    } catch (error) {
        console.error("Error getting file from AWS S3:", error);
        throw error;
    }
}

// Function to delete a file from AWS S3 bucket
exports.deleteFileFromAwsS3 = async function(dataObject) {
    try {
        const fileName = `abcd.txt`; // Specify the file name

        // Delete the specified file from AWS S3 bucket
        await awss3connect.deleteFileFromAws(`${awss3connect.awsFolderNames.logo}/${fileName}`);
    } catch (error) {
        console.error("Error deleting file from AWS S3:", error);
        throw error;
    }
}