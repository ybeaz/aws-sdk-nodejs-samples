import AWS from 'aws-sdk'

import { getApigatewayExportInfo } from './utils/getApigatewayExportInfo'
import { getApigatewayRestApisInfo } from './utils/getApigatewayRestApisInfo'
import { getApigatewayStagesInfo } from './utils/getApigatewayStagesInfo'
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

  const params2 = {
    restApiId: 'tm7nlu04e7' /* required */,
    // deploymentId: 'STRING_VALUE'
  }

  const apigatewayStagesInfo = await getApigatewayStagesInfo(params2)

  const params3 = {
    // limit: 'NUMBER_VALUE',
    // position: 'STRING_VALUE'
  }

  const apigatewayRestApisInfo = await getApigatewayRestApisInfo(params3)

  var params4 = {
    exportType: 'swagger' /* required: oas30 swagger */,
    restApiId: 'tm7nlu04e7' /* required */,
    stageName: 'prod' /* required */,
    // accepts: 'STRING_VALUE',
    // parameters: {
    //   '<String>': 'STRING_VALUE',
    //   /* '<String>': ... */
    // },
  }

  const apigatewayExportInfo = await getApigatewayExportInfo(params4)

  console.info('CloudFormation [31]', {
    apigatewayGetStagesInfo,
    apigatewayDeploymentsInfo,
    apigatewayResourcesInfo,
    basePathMappings,
    apigatewayStagesInfo,
    apigatewayRestApisInfo,
    endpointConfiguration: apigatewayRestApisInfo.find(
      item => item.id === 'tm7nlu04e7'
    ).endpointConfiguration,
    apigatewayExportInfo,
  })
}

getListGatewayEndpoints()
