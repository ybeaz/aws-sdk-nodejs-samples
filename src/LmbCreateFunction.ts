import AWS from 'aws-sdk'

AWS.config.credentials = new AWS.SharedIniFileCredentials({
  profile: 'work-account',
})

// Load the AWS SDK for Node.js
// var AWS = require('aws-sdk');

// Load credentials and set Region from JSON file
// AWS.config.loadFromPath('./config.json');

// Create the IAM service object
var lambda = new AWS.Lambda({ apiVersion: '2015-03-31' })

var params = {
  Code: {
    /* required */ S3Bucket: 'BUCKET_NAME',
    S3Key: 'ZIP_FILE_NAME',
  },
  FunctionName: 'lambda-func-003' /* required */,
  Handler: 'slotSpin.Slothandler' /* required */,
  Role: 'ROLE_ARN' /* required */,
  Runtime: 'nodejs8.10' /* required */,
  Description: 'Slot machine game results generator',
}
lambda.createFunction(params, function (err, data) {
  if (err) console.log(err)
  // an error occurred
  else console.log('success') // successful response
})
