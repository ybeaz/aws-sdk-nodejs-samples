import AWS from 'aws-sdk'

interface IGetCreatedLambdaFunction {
  (params: any): Promise<void>
}

/**
 * @description Function to create lambda function
 */

export const getCreatedLambdaFunction: IGetCreatedLambdaFunction =
  async params => {
    try {
      const lambda = new AWS.Lambda({ apiVersion: '2015-03-31' })
      const data = await lambda.createFunction(params).promise()
      console.info('lambda success', data)
    } catch (error) {
      console.info('lambda failure', error.message)
    }
  }
