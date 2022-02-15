## AWS SDK sample scripts

### Scripts that are using AWS JS SDK

1. Check global credentials `npx ts-node ./src/checkCredentials.ts`
2. Create S3 Bucket `npx ts-node ./src/S3createBucketUploadObj.ts`
3. Delete S3 Buckets in bulk mode `npx ts-node ./src/S3DeleteObjectCommand.ts`
4. Create a Lambda function
   - Create lambda function file name and add function itself in `src/lambda/`
   - CLI run `yarn build`
   - Change `lambdaFuncName` in `./src/LambdaCreateFunction.ts`
   - CLI run `npx ts-node ./src/LmbCreateFunction.ts`
   - [Example, HTTP GET Hello World](https://2q53ajitdi.execute-api.us-east-1.amazonaws.com/hello-world-html)
   - [Example, REST GET Hello World](https://860t5j2406.execute-api.us-east-1.amazonaws.com/prod/)
5. Create Cognito Identity pool `npx ts-node ./src/CognitoCreateUserPool.ts`

### References

- [AWS SDK API](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/)
- [AWS Cognito identity](https://console.aws.amazon.com/cognito)
- [AWS S3 console](https://console.aws.amazon.com/s3/)
- [AWS Lambda console](https://console.aws.amazon.com/lambda)
- [AWS API Gateway](https://console.aws.amazon.com/apigateway)
- [AWS VPC Experience](https://console.aws.amazon.com/vpc)
- [AWS IAM console](https://console.aws.amazon.com/iamv2)

### Finding and edit global credentials

Path `~/.aws/credentials`
