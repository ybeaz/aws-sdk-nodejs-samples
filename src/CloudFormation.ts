import AWS from 'aws-sdk'

import { getBasePathMappings } from './utils/getBasePathMappings'
import { getApigatewayResourcesInfo } from './utils/getApigatewayResourcesInfo'
import { getApigatewayDeploymentsInfo } from './utils/getApigatewayDeploymentsInfo'
import { getApigatewayGetStagesInfo } from './utils/getApigatewayGetStagesInfo'
import { getEndpointParts } from './utils/getEndpointParts'

/**
 * @description Script for listing stacks Gateway endpoint
 *      With AWS CloudFormation, you declare all your resources and dependencies in a template file.
 *      The template defines a collection of resources as a single unit called a stack.
 *      AWS CloudFormation creates and deletes all member resources of the stack together and
 *          manages all dependencies between the resources for you.
 * @link AWS reference https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CloudFormation.html#listStackInstances-property
 * @run npx ts-node ./src/CloudFormation.ts
 */

// Loading credentials and region settings
AWS.config.loadFromPath('./config.json')

export const getListGatewayEndpoints = async () => {
  const params = {
    restApiId: 'tm7nlu04e7' /* required */,
    // deploymentId: 'STRING_VALUE'
  }
  const apigatewayGetStagesInfo = await getApigatewayGetStagesInfo(params)
  const apigatewayDeploymentsInfo = await getApigatewayDeploymentsInfo(params)
  const apigatewayResourcesInfo = await getApigatewayResourcesInfo(params)
  const basePathMappings = await getBasePathMappings()

  console.info('CloudFormation [31]', {
    apigatewayGetStagesInfo,
    apigatewayDeploymentsInfo,
    apigatewayResourcesInfo,
    basePathMappings,
  })
}

getListGatewayEndpoints()
