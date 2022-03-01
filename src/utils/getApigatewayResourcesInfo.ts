import AWS from 'aws-sdk'

// Loading credentials and region settings
AWS.config.loadFromPath('./config.json')

interface IGetApigatewayResourcesInfo {
  (params: {
    restApiId: string /* required */
    embed?: string[]
    limit?: number
    position?: string
  }): any
}

/**
 * @description Function to to return api gateway recouces info
 * @link https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/
 */

export const getApigatewayResourcesInfo: IGetApigatewayResourcesInfo =
  async params => {
    const apigateway = new AWS.APIGateway({ apiVersion: '2015-07-09' })
    const resources = await apigateway.getResources(params).promise()
    return resources.items
  }

/**
 * @returns example:
 * apigatewayResourcesInfo: [
    { id: '0f5lbi33jd', path: '/', resourceMethods: [Object] },
    {
      id: '6umo7g',
      parentId: '0f5lbi33jd',
      pathPart: 'api',
      path: '/api',
      resourceMethods: [Object]
    }
  ]
 */
