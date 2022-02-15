interface IGetDeletedS3Object {
  (s3Client: any, buckets: string[]): Promise<void>
}

/**
 * @description Funciton to delete all objects in AWS S3 buckets
 * @param s3Client
 * @param buckets
 */

export const getDeletedS3Object: IGetDeletedS3Object = async (
  s3Client,
  buckets
) => {
  await buckets.forEach(async bucket => {
    const res = await s3Client
      .listObjects({
        Bucket: bucket,
      })
      .promise()

    const params2 = res?.Contents?.map(obj => {
      return {
        Bucket: bucket,
        Delete: {
          Objects: [
            {
              Key: obj.Key || '',
            },
          ],
          Quiet: false,
        },
      }
    })

    params2 &&
      params2.map(async object => {
        await s3Client.deleteObjects(object).promise()
      })
  })
}
