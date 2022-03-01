import AWS from 'aws-sdk'

// Loading credentials and region settings
AWS.config.loadFromPath('./config.json')

interface ITemplate {
  (): void
}

/**
 * @description Function to
 * @link https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/
 */

export const template: ITemplate = async () => {
  return
}
