import AWS from 'aws-sdk'

// Loading credentials and region settings
AWS.config.loadFromPath('./config.json')

interface IGetApigatewayExportInfo {
  (params: {
    exportType: string /* required The type of export. Acceptable values are 'oas30' for OpenAPI 3.0.x and 'swagger' for Swagger/OpenAPI 2.0. */
    restApiId: string /* required */
    stageName: string /* required */
    accepts?: string
    parameters?: {
      [T: string]: string
      /* '<String>': ... */
    }
  }): any
}

/**
 * @description Function to to return api gateway export info
 * @link https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html
 */

export const getApigatewayExportInfo: IGetApigatewayExportInfo =
  async params => {
    const apigateway = new AWS.APIGateway({ apiVersion: '2015-07-09' })
    const exportVar = await apigateway.getExport(params).promise()
    return exportVar
  }

/**
 * @returns example:
 */

// var params = {
//   exportType: 'STRING_VALUE', /* required */
//   restApiId: 'STRING_VALUE', /* required */
//   stageName: 'STRING_VALUE', /* required */
//   accepts: 'STRING_VALUE',
//   parameters: {
//     '<String>': 'STRING_VALUE',
//     /* '<String>': ... */
//   }
// };
// apigateway.getExport(params, function(err, data) {
//   if (err) console.log(err, err.stack); // an error occurred
//   else     console.log(data);           // successful response
// });
