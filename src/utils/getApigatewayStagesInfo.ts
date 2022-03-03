import AWS from 'aws-sdk'

// Loading credentials and region settings
AWS.config.loadFromPath('./config.json')

interface IGetApigatewayStagesInfo {
  (params: { restApiId: string /* required */; deploymentId?: string }): any
}

/**
 * @description Function to to return api gateway recouces info
 * @link https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/
 */

export const getApigatewayStagesInfo: IGetApigatewayStagesInfo =
  async params => {
    const apigateway = new AWS.APIGateway({ apiVersion: '2015-07-09' })
    const stages = await apigateway.getStages(params).promise()
    return stages.item
  }

/**
 * @returns example:
 * apigatewayGetStagesInfo: [
    {
      deploymentId: 'x7732x',
      stageName: 'prod',
      description: 'production',
      cacheClusterEnabled: false,
      cacheClusterSize: '0.5',
      cacheClusterStatus: 'NOT_AVAILABLE',
      methodSettings: [Object],
      tracingEnabled: false,
      createdDate: 2022-02-15T22:13:09.000Z,
      lastUpdatedDate: 2022-02-15T22:13:13.000Z
    }
  ],
 */

// var params = {
//   restApiId: 'STRING_VALUE', /* required */
//   deploymentId: 'STRING_VALUE'
// };
// apigateway.getStages(params, function(err, data) {
//   if (err) console.log(err, err.stack); // an error occurred
//   else     console.log(data);           // successful response
// });
