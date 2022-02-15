exports.handler = async (event, context, callback) => {
  const res = {
    statusCode: 200,
    headers: { 'content-type': 'text/html; charset=UTF-8' },
    body: '<!DOCTYPE html><html><body><h1>Hello World!</h1></body></html>',
  }
  callback(null, res)

  context.succeed()
}
