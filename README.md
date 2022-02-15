## AWS SDK sample codes

### Scripts that are using AWS JS SDK

1. Create S3 Bucket, working example `npx ts-node ./src/S3createBucketUploadObj.ts`
2. Delete S3 Buckets in bulk mode `npx ts-node ./src/S3DeleteObjectCommand.ts`
3. Create Lambda function, working example
   - Create lambda function file name and add function itself in `src/lambda/`
   - CLI run `yarn build`
   - Change `lambdaFuncName` in `./src/LmbCreateFunction.ts`
   - CLI run `npx ts-node ./src/LmbCreateFunction.ts`
   - Example HTML url `https://2q53ajitdi.execute-api.us-east-1.amazonaws.com/lambda-003-37f95971-01a9-4bb4-b64a-de3ad828393d`

### References

- AWS SDK API `https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/`
- AWS S3 console `https://console.aws.amazon.com/s3/`
- AWS Lambda console `https://console.aws.amazon.com/lambda`
- AWS IAM console `https://console.aws.amazon.com/iamv2`

### Check credentialss

npx ts-node checkCredentials.ts

### Find and edit credentials

~/.aws/credentials
