import AWS from 'aws-sdk'
import { v4 as uuidv4 } from 'uuid'
import fs from 'fs'

import { getCreatedLambdaFunction } from './utils/getCreatedLambdaFunction'

/**
 * @description Script for creating lambda function with parameters
 * @link AWS reference https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
 */

// Loading credentials and region settings
AWS.config.loadFromPath('./config.json')

const lambdaFuncName = 'lambda-html-001'
const apiFunctionName = 'hello-world-html'

const file = fs.readFileSync(`dist/src/lambda/${lambdaFuncName}.zip`)

const params = {
  Description: 'Sample lambda function',
  Code: {
    /* required */
    // ImageUri: 'STRING_VALUE',
    // S3Bucket: 'STRING_VALUE',
    // S3Key: 'STRING_VALUE',
    // S3ObjectVersion: 'STRING_VALUE',
    ZipFile: Buffer.from(file), // Buffer.from('./lambda-003.zip'), // || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */
  },
  FunctionName: `${apiFunctionName}` /* required */,
  Role: 'arn:aws:iam::465969086547:role/service-role/role-test-002' /* required */,
  Architectures: [
    'x86_64',
    /* | arm64 more items */
  ],
  // CodeSigningConfigArn: 'STRING_VALUE', // 'STRING_VALUE'
  DeadLetterConfig: {
    // TargetArn: 'STRING_VALUE',
  },
  Environment: {
    Variables: {
      // '<EnvironmentVariableName>': 'STRING_VALUE',
      /* '<EnvironmentVariableName>': ... */
    },
  },
  FileSystemConfigs: [
    // {
    //   Arn: 'STRING_VALUE' /* required */,
    //   LocalMountPath: 'STRING_VALUE' /* required */,
    // },
    /* more items */
  ],
  Handler: `${lambdaFuncName}.handler`,
  // ImageConfig: {
  //   Command: [
  //     'STRING_VALUE',
  //     /* more items */
  //   ],
  //   EntryPoint: [
  //     'STRING_VALUE',
  //     /* more items */
  //   ],
  //   WorkingDirectory: 'STRING_VALUE',
  // },
  KMSKeyArn: '', // 'STRING_VALUE'
  Layers: [
    // 'STRING_VALUE',
    /* more items */
  ],
  MemorySize: 512, //'NUMBER_VALUE',
  PackageType: 'Zip', // | Image,
  Publish: true, // || false,
  Runtime: 'nodejs14.x',
  Tags: {
    'lambda-console:blueprint': 'microservice-http-endpoint',
    // '<TagKey>': 'STRING_VALUE',
    /* '<TagKey>': ... */
  },
  Timeout: 10, // 'NUMBER_VALUE',
  TracingConfig: {
    Mode: 'Active', // | PassThrough
  },
  VpcConfig: {
    SecurityGroupIds: [
      'sg-0df577061974c9cd2',
      /* more items */
    ],
    SubnetIds: [
      'subnet-076e0c5f0f1043001',
      'subnet-0fdd02e2464b88bc7',
      // 'STRING_VALUE',
      /* more items */
    ],
  },
}

const run = async params => {
  await getCreatedLambdaFunction(params)
}

run(params)
