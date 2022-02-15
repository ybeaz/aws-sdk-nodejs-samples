import AWS from 'aws-sdk'

interface IGetCreatedS3Bucket {
  (bucketName: string): Promise<any>
}

/**
 * @description Function to create S3 AWS bucket
 */

export const getCreatedS3Bucket = async bucketName =>
  new AWS.S3({ apiVersion: '2006-03-01' })
    .createBucket({ Bucket: bucketName })
    .promise()
