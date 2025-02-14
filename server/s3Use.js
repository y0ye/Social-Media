// s3Use.js - File for utilizing AWS S3 functions

// Import the module for AWS S3 functions
const awss3connect = require("./awsS3connect");

// Function to upload a file to AWS S3 bucket
exports.uploadFileToAwsS3 = async function(dataObject) {
    try {
        // Define the path where the file will be saved locally
        const savePath = `uploads/`+dataObject.fileName;
        
        // Upload the file to AWS S3 bucket in the specified subfolder
        await awss3connect.uploadFileToAws(`${awss3connect.awsFolderNames.sub1}/${dataObject.fileName}`, `${savePath}`);
    } catch (error) {
        console.error("Error uploading file to AWS S3:", error);
        throw error;
    }
}