import AWS from 'aws-sdk'

// Loading credentials and region settings
AWS.config.loadFromPath('./config.json')

interface IGetApigatewayGetStagesInfo {
  (params: {
    restApiId: string /* required */
    deploymentId?: string // void
  }): any
}

/**
 * @description Function to get api gateway stages info
 */

export const getApigatewayGetStagesInfo: IGetApigatewayGetStagesInfo =
  async params => {
    try {
      const apigateway = new AWS.APIGateway({ apiVersion: '2015-07-09' })
      const res = await apigateway.getStages(params).promise()
      return res.item
    } catch (error) {
      console.info('cloudformation failure', error.message)
    }
  }

/**
 * @returns example:
 */
