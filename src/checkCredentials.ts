import AWS from 'aws-sdk'

AWS.config.credentials = new AWS.SharedIniFileCredentials({
  profile: 'work-account',
})

AWS.config.getCredentials(function (err) {
  if (err) console.log(err.stack)
  // credentials not loaded
  else {
    console.log('Access key:', AWS.config?.credentials?.accessKeyId)
  }
})
