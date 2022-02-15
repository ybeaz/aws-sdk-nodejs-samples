exports.handler = async (event, context, callback) => {
  let body = { msg: 'Hello World' }
  let statusCode = '200'
  const headers = {
    'Content-Type': 'application/json',
  }

  const res = {
    statusCode,
    body,
    headers,
  }

  callback(null, res)

  context.succeed()
}
