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
 *   apigatewayExportInfo: {
    contentType: 'application/octet-stream',
    contentDisposition: 'attachment; filename="swagger_2022-02-15T22:13:09Z.json"',
    body: '{\n' +
      '  "swagger" : "2.0",\n' +
      '  "info" : {\n' +
      '    "description" : "API based on lambda with open and private pats",\n' +
      '    "version" : "2022-02-15T22:13:09Z",\n' +
      '    "title" : "api-lambda-open/private"\n' +
      '  },\n' +
      '  "host" : "tm7nlu04e7.execute-api.us-east-1.amazonaws.com",\n' +
      '  "basePath" : "/prod",\n' +
      '  "schemes" : [ "https" ],\n' +
      '  "paths" : {\n' +
      '    "/" : {\n' +
      '      "get" : {\n' +
      '        "produces" : [ "application/json" ],\n' +
      '        "responses" : {\n' +
      '          "200" : {\n' +
      '            "description" : "200 response",\n' +
      '            "schema" : {\n' +
      '              "$ref" : "#/definitions/Empty"\n' +
      '            }\n' +
      '          }\n' +
      '        }\n' +
      '      }\n' +
      '    },\n' +
      '    "/api" : {\n' +
      '      "get" : {\n' +
      '        "produces" : [ "application/json" ],\n' +
      '        "responses" : {\n' +
      '          "200" : {\n' +
      '            "description" : "200 response",\n' +
      '            "schema" : {\n' +
      '              "$ref" : "#/definitions/Empty"\n' +
      '            }\n' +
      '          }\n' +
      '        },\n' +
      '        "security" : [ {\n' +
      '          "auth-lambda-test-002" : [ ]\n' +
      '        } ]\n' +
      '      }\n' +
      '    }\n' +
      '  },\n' +
      '  "securityDefinitions" : {\n' +
      '    "auth-lambda-test-002" : {\n' +
      '      "type" : "apiKey",\n' +
      '      "name" : "Authorization",\n' +
      '      "in" : "header",\n' +
      '      "x-amazon-apigateway-authtype" : "cognito_user_pools"\n' +
      '    }\n' +
      '  },\n' +
      '  "definitions" : {\n' +
      '    "Empty" : {\n' +
      '      "type" : "object",\n' +
      '      "title" : "Empty Schema"\n' +
      '    }\n' +
      '  }\n' +
      '}'
  }
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
