import AWS from 'aws-sdk'

interface IGetEndpointParts {
  (pathname: string): any
}

/**
 * @description Function to get endpoint parts as an object
 */

export const getEndpointParts: IGetEndpointParts = pathname => {
  try {
    return new AWS.Endpoint(pathname)
  } catch (error) {
    console.info('getEndpointParts failure', error.message)
    return {}
  }
}
