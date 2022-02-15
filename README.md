## AWS SDK sample scripts

### Task and subtasks

Create an application through CDK that deploys the following resources:

1. A lambda function that contains a simple REST GET API that returns “hello world”
   - Done: Created SDK script `./src/LambdaCreateFunction.ts` to create and deploy lambda functions
2. API Gateway with the endpoint for the lambda function
   - Done:
     - To test [link public without authentication](https://tm7nlu04e7.execute-api.us-east-1.amazonaws.com/prod)
     - To test [link with private token authentication](https://tm7nlu04e7.execute-api.us-east-1.amazonaws.com/prod/api), where authentication is achieved through Cognito user pool
3. Cognito user pool, that authenticates and authorizes the use of the API
   - Done:
     - To test the [authetication page](https://hello-world-test-001.auth.us-east-1.amazoncognito.com/login?client_id=5v44sg5kdo7ubgjmvaiep75a10&response_type=code&scope=email+openid&redirect_uri=https://hello-world-test-001.auth.us-east-1.amazoncognito.com/)
4. Relevant IAM permissions
   - Done: Impemented SDK role in script `src/LambdaCreateFunction.ts`

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
5. Create Cognito identity pool `npx ts-node ./src/CognitoCreateIdentityPool.ts`

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
