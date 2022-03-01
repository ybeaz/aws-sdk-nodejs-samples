import AWS from 'aws-sdk'

// Loading credentials and region settings
AWS.config.loadFromPath('./config.json')

interface IGetApigatewayRestApisInfo {
  (params: { limit?: number; position?: string }): any
}

/**
 * @description Function to to return api gateway recouces info
 * @link https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html
 */

export const getApigatewayRestApisInfo: IGetApigatewayRestApisInfo =
  async params => {
    const apigateway = new AWS.APIGateway({ apiVersion: '2015-07-09' })
    const resources = await apigateway.getRestApis(params).promise()
    return resources.items
  }

/**
 * @returns example:
 * apigatewayRestApisInfo: [
    {
      id: '43ghbnai39',
      name: 'lambda-test-003-JSON',
      description: 'GraphQL implementation',
      createdDate: 2022-02-28T23:09:00.000Z,
      apiKeySource: 'HEADER',
      endpointConfiguration: [Object],
      disableExecuteApiEndpoint: false
    },
    {
      id: 'd7ha68ref1',
      name: 'api-lambda-auth',
      description: 'API with GET, POST requests with Auththoriser based on Cognito user tokens',
      createdDate: 2022-02-09T15:25:18.000Z,
      apiKeySource: 'HEADER',
      endpointConfiguration: [Object],
      disableExecuteApiEndpoint: false
    },
    {
      id: 'lu4uwzff83',
      name: 'PetStore',
      description: 'Your first API with Amazon API Gateway. This is a sample API that integrates via HTTP with our demo Pet Store endpoints',
      createdDate: 2022-02-09T15:15:59.000Z,
      apiKeySource: 'HEADER',
      endpointConfiguration: [Object],
      disableExecuteApiEndpoint: false
    },
    {
      id: 'tm7nlu04e7',
      name: 'api-lambda-open/private',
      description: 'API based on lambda with open and private pats',
      createdDate: 2022-02-15T22:09:26.000Z,
      apiKeySource: 'HEADER',
      endpointConfiguration: [Object],
      disableExecuteApiEndpoint: false
    }
  ],
  endpointConfiguration: { types: [ 'REGIONAL' ] }
 */

// var params = {
//   limit: 'NUMBER_VALUE',
//   position: 'STRING_VALUE'
// };
// apigateway.getRestApis(params, function(err, data) {
//   if (err) console.log(err, err.stack); // an error occurred
//   else     console.log(data);           // successful response
// });
