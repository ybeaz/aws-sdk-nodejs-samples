interface IGetDeletedS3EmptuBuckets {
  (s3Client: any, buckets: string[]): Promise<void>
}

/**
 * @description Function to delete empty AWS S3 buckets
 * @param s3Client
 * @param buckets
 */

export const getDeletedS3EmptuBuckets: IGetDeletedS3EmptuBuckets = async (
  s3Client,
  buckets
) => {
  buckets.forEach(async bucket => {
    await s3Client.deleteBucket({ Bucket: bucket }).promise()

    console.info('Deleted', { bucket })
  })
}
