## AWS SDK sample scripts

### Scripts that are using AWS JS SDK

1. Check global credentials `npx ts-node checkCredentials.ts`
2. Create S3 Bucket `npx ts-node ./src/S3createBucketUploadObj.ts`
3. Delete S3 Buckets in bulk mode `npx ts-node ./src/S3DeleteObjectCommand.ts`
4. Create a Lambda function
   - Create lambda function file name and add function itself in `src/lambda/`
   - CLI run `yarn build`
   - Change `lambdaFuncName` in `./src/LmbCreateFunction.ts`
   - CLI run `npx ts-node ./src/LmbCreateFunction.ts`
   - [Example url with Hello World](https://2q53ajitdi.execute-api.us-east-1.amazonaws.com/lambda-003-37f95971-01a9-4bb4-b64a-de3ad828393d)

### References

- [AWS SDK API](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/)
- [AWS S3 console](https://console.aws.amazon.com/s3/)
- [AWS Lambda console](https://console.aws.amazon.com/lambda)
- [AWS IAM console](https://console.aws.amazon.com/iamv2)

### Finding and edit global credentials

Path `~/.aws/credentials`
