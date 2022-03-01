## AWS SDK sample scripts

### Task and subtasks

Create an application through CDK that deploys the following resources:

1. Lambda function that contains a simple REST GET API that returns “hello world”
   - Done: Created SDK script [./src/LambdaCreateFunction.ts](https://github.com/ybeaz/aws-node-samples/blob/main/src/LmbCreateFunction.ts) to create and deploy lambda functions
2. API Gateway with the endpoint for the lambda function
   - Done:
     - To test [link public without authentication](https://tm7nlu04e7.execute-api.us-east-1.amazonaws.com/prod)
     - To test [link with private token authentication](https://tm7nlu04e7.execute-api.us-east-1.amazonaws.com/prod/api), where authentication is achieved through Cognito user pool
3. Cognito user pool, that authenticates and authorizes the use of the API
   - Done:
     - To test [link authetication page](https://hello-world-test-001.auth.us-east-1.amazoncognito.com/login?client_id=5v44sg5kdo7ubgjmvaiep75a10&response_type=code&scope=email+openid&redirect_uri=https://hello-world-test-001.auth.us-east-1.amazoncognito.com/)
4. Relevant IAM permissions
   - Done: Impemented SDK role in script via params.Role [./src/LambdaCreateFunction.ts](https://github.com/ybeaz/aws-node-samples/blob/B-002/src/LambdaCreateFunction.ts)

<br />

### How to

1. Create S3 Bucket with SDK function
   - Done: script link [./src/S3CreateBucketUploadObj.ts](https://github.com/ybeaz/aws-node-samples/blob/B-002/src/S3CreateBucketUploadObj.ts)
2. Delete S3 Buckets in bulk mode with SDK function
   - Done: script link [./src/S3DeleteObjectCommand.ts](https://github.com/ybeaz/aws-node-samples/blob/B-002/src/S3DeleteObjectCommand.ts)
3. Find API endpoint URL:
   - From console 1st method\
      => Go to [AWS API Gateway](https://console.aws.amazon.com/apigateway)\
      => Go to Stages\
      => Select a stage\
      => Look at "Invoke URL ..."
   - From console 2st method\
      => Go to [AWS Lambda console](https://console.aws.amazon.com/lambda)\
      => Select Lambda function
     => Go to Configuration\
      => Loot at "Trigger"
4. Lambda function for HTTP GET output
   - [Example, HTTP GET Hello World](https://2q53ajitdi.execute-api.us-east-1.amazonaws.com/hello-world-html)
5. [Tools](https://github.com/ybeaz/aws-node-samples/tree/B-002/tools) and [utilities](https://github.com/ybeaz/aws-node-samples/tree/B-002/src/utils) that provide a scalable approach and the ability to maintain the repository

<br />

### How to run scripts in CLI using AWS JS SDK

1. Check global credentials `npx ts-node ./src/checkCredentials.ts`
2. Create S3 Bucket `npx ts-node ./src/S3CreateBucketUploadObj.ts`
3. Delete S3 Buckets in bulk mode `npx ts-node ./src/S3DeleteObjectCommand.ts`
4. Create a Lambda function
   - Create lambda function file name and add function itself in `src/lambda/`
   - CLI run `yarn build`
   - Change `lambdaFuncName` in `./src/LambdaCreateFunction.ts`
   - CLI run `npx ts-node ./src/LmbCreateFunction.ts`
5. Create Cognito identity pool `npx ts-node ./src/CognitoCreateIdentityPool.ts`

<br />

### References

- [AWS SDK API](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/)
- [AWS SDK aws-samples > aws-cdk-examples > Typescript](https://github.com/aws-samples/aws-cdk-examples/tree/master/typescript)

<br />

### Links to AWS console related sections

- [AWS Cognito identity](https://console.aws.amazon.com/cognito)
- [AWS S3 console](https://console.aws.amazon.com/s3/)
- [AWS Lambda console](https://console.aws.amazon.com/lambda)
- [AWS API Gateway](https://console.aws.amazon.com/apigateway)
- [AWS VPC Experience](https://console.aws.amazon.com/vpc)
- [AWS IAM console](https://console.aws.amazon.com/iamv2)

<br />

### REST API authetication workflow

1. Sing up, login at the [Cognito user pool](https://hello-world-test-001.auth.us-east-1.amazoncognito.com/login?client_id=5v44sg5kdo7ubgjmvaiep75a10&response_type=code&scope=email+openid&redirect_uri=https://hello-world-test-001.auth.us-east-1.amazoncognito.com/) and obtain code via GET request, see as a part of url
2. Use code to request id_token, request example:
   ```
      curl --location --request POST 'https://hello-world-test-001.auth.us-east-1.amazoncognito.com/oauth2/token' \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --header 'Authorization: Basic NXY0NHNnNWtkbzd1YmdqbXZhaWVwNzVhMTA6MWphNnNvZXBiYnBlOTR1cjJsdTQxbGg1dGdxNHVhOTQ4bG1zcnJndHR2ZmFuZm9mN2JkMA==' \
    --header 'Cookie: XSRF-TOKEN=510f0c01-a2b7-4db0-a488-4d04be86741f' \
    --data-urlencode 'grant_type=authorization_code' \
    --data-urlencode 'client_id=5v44sg5kdo7ubgjmvaiep75a10' \
    --data-urlencode 'code=820561ac-938b-4d3f-a601-30382701f462' \
    --data-urlencode 'redirect_uri=https://hello-world-test-001.auth.us-east-1.amazoncognito.com/'
   ```
3. Use id_token to get access to creared API, example:
   ```
    curl --location --request GET 'https://tm7nlu04e7.execute-api.us-east-1.amazonaws.com/prod/api' \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --header 'Authorization: eyJraWQiOiJlaHpDVDlrQXUzNzZQbG10WTErQkk1djhQd1o0YlwvNGZUZU9HYzh5N2xDbz0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiTmd0WEtPUVBiUzhfSUJuLTdtS1pDdyIsInN1YiI6ImQ4NmRkMTU0LTQ5ZDMtNDdkZS04MmRmLTg1NWI3NTc4OWVkNiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9VYjFKUE5hNlQiLCJjb2duaXRvOnVzZXJuYW1lIjoiYWxleC0wMDMiLCJvcmlnaW5fanRpIjoiYWQ4YzY0ZmUtMzFlZC00OTE2LTg4NGYtOTkyNGFmMDI5ZDU5IiwiYXVkIjoiNXY0NHNnNWtkbzd1YmdqbXZhaWVwNzVhMTAiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTY0NDk2MzUxNCwiZXhwIjoxNjQ0OTY3MTE0LCJpYXQiOjE2NDQ5NjM1MTQsImp0aSI6ImUyMWRkZTIwLWVlMGQtNGZlNC1iZDE5LTUzZDFhMjA0NmQ1ZiIsImVtYWlsIjoidDM1MzEzNTBAeWFob28uY29tIn0.JmBrt9I3xoBJGDf-zR2P8-psNVb0yJIqZCChCkXlp_EgR9To_KBSRtSfqde29DVtpK_YQitEV4jaRYTcGUTCTY_cdOeyWLbvkkejlyL2_yatO-QgyMuzyE-xOJ2BD4lBRWTHrHZ2xvkee057H5PGuSAWlGZBatnu-agKiE1wttpbCp0Dw7pTZpuxwi63q0mWqy2mF4J4fSvxh-xX1xLsXFVXxvmHeKJDt_77wFaWUpbl1s0qJypo3GskcwwziZxx6-2-trmVsGQ3_kzQLUtFpil9Mmb7fRNCwuWYmFD62P143axseajRJKGmS5syf6_YBcnC9aS_PYiTKIJhiE6stQ'
   ```
   <br />

### Finding and edit credentials

- Global credentials, path `~/.aws/credentials`
- Local credentials, path `./config.json`
