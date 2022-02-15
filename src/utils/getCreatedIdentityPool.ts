import AWS from 'aws-sdk'

interface IGetCreatedIdentityPool {
  (params: any): Promise<void>
}

/**
 * @description Function to create Cognito Identity Pool
 */

export const getCreatedIdentityPool: IGetCreatedIdentityPool = async params => {
  const cognitoidentity = new AWS.CognitoIdentity()
  await cognitoidentity.createIdentityPool(params).promise()
}
