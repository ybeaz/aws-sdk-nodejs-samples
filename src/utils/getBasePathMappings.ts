import AWS, { AWSError } from 'aws-sdk'

// Loading credentials and region settings
AWS.config.loadFromPath('./config.json')

interface IGetBasePathMappings {
  (
    params:
      | {
          domainName: string /* required */
          limit?: number
          position?: string
          [prop: string]: unknown
        }
      | { [prop: string]: any }
  ): any | AWSError
}

/**
 * @description Function to return base path mappings
 * @link https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/
 * @link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-regional-api-custom-domain-create.html
 */

export const getBasePathMappings = async () => {
  const apigateway = new AWS.APIGateway({ apiVersion: '2015-07-09' })

  const domainNames = await apigateway.getDomainNames({}).promise()

  console.info('getBasePathMappings [29]', { domainNames })

  const basePaths =
    Array.isArray(domainNames) &&
    domainNames.map(async domainName => {
      const params = {
        domainName /* required */,
        // limit: 'NUMBER_VALUE',
        // position: 'STRING_VALUE'
      }
      return apigateway.getBasePathMappings(params).promise()
    })

  return basePaths
}
