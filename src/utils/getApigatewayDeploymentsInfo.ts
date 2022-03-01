import AWS from 'aws-sdk'

// Loading credentials and region settings
AWS.config.loadFromPath('./config.json')

interface IGetApigatewayDeploymentsInfo {
  (params: {
    restApiId: string /* required */
    limit?: number
    position?: string
  }): any
}

/**
 * @description Function to
 * @link https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html#getDeployments-property
 */

export const getApigatewayDeploymentsInfo: IGetApigatewayDeploymentsInfo =
  async params => {
    const apigateway = new AWS.APIGateway({ apiVersion: '2015-07-09' })
    const deployments = await apigateway.getDeployments(params).promise()
    return deployments.items
  }

/**
 * @returns example:
 * apigatewayDeploymentsInfo: [ { id: 'x7732x', createdDate: 2022-02-15T22:13:09.000Z } ]
 */
