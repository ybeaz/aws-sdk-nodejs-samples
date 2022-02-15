import AWS from 'aws-sdk'

interface IGetUploadedObjS3Bucket {
  (objectParams: { Bucket: string; Key: string; Body: string }): Promise<any>
}

/**
 * @Description Function upload an object to AWS S3 bucket
 */

export const getUploadedObjS3Bucket: IGetUploadedObjS3Bucket =
  async objectParams =>
    new AWS.S3({ apiVersion: '2006-03-01' }).putObject(objectParams).promise()
