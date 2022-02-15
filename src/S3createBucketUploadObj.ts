// Load the SDK and UUID
import AWS from 'aws-sdk'
import { v4 as uuidv4 } from 'uuid'

import { getUploadedObjS3Bucket } from './utils/getUploadedObjS3Bucket'
import { getCreatedS3Bucket } from './utils/getCreatedS3Bucket'

AWS.config.credentials = new AWS.SharedIniFileCredentials({
  profile: 'work-account',
})

/**
 * @Description AWS SDK script to create a text file and upload it on S3 AWS service
 * @Link To check a result on AWS https://console.aws.amazon.com/s3/
 * @Link (Sourse) https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-started-nodejs.html#getting-started-nodejs-install-sdk
 */

// Create unique bucket name
const bucketName = 'node-sdk-sample-' + uuidv4()
console.info('createBucket [17]', { bucketName })

// Create name for uploaded object key
const keyName = 'hello_world_6.txt'

const performMission = async (bucketName2, keyName2) => {
  try {
    await getCreatedS3Bucket(bucketName2)

    const objectParams = {
      Bucket: bucketName2,
      Key: keyName2,
      Body: 'Hello World! v2',
    }

    await getUploadedObjS3Bucket(objectParams)
  } catch (error) {
    console.info('createBucket [38]', { message: error.message })
  }
  console.log('Successfully uploaded data to ' + bucketName + '/' + keyName)
}

performMission(bucketName, keyName)
