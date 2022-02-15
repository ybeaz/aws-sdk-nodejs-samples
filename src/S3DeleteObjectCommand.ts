import AWS from 'aws-sdk'

import { getDelayedCode } from './utils/getDelayedCode'
import { getDeletedS3Object } from './utils/getDeletedS3Object'
import { getDeletedS3EmptuBuckets } from './utils/getDeletedS3EmptuBuckets'

AWS.config.credentials = new AWS.SharedIniFileCredentials({
  profile: 'work-account',
})

/**
 * @description Script for bulk deletion of S3 Buckets by the static list of bucket names
 * @link AWS reference https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html
 */

const buckets: string[] = [
  'node-sdk-sample-1c830a67-ddf5-4748-8731-ab499ab28e94',
  'node-sdk-sample-d937b3ee-60f3-4c67-88fd-443018f41914',
]

export const run = async () => {
  try {
    const s3Client = new AWS.S3({ apiVersion: '2006-03-01' })

    await getDeletedS3Object(s3Client, buckets)
    await getDelayedCode(5000)
    await getDeletedS3EmptuBuckets(s3Client, buckets)
  } catch (err) {
    console.log('Error', err)
  }
}

run()
