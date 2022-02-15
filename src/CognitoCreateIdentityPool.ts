import AWS from 'aws-sdk'

import { getCreatedIdentityPool } from './utils/getCreatedIdentityPool'

// Loading credentials and region settings
AWS.config.loadFromPath('./config.json')

AWS.config.apiVersions = { cognitoidentity: '2014-06-30' }

const params = {
  AllowUnauthenticatedIdentities: true || false /* required */,
  IdentityPoolName: 'pool-name-test-002' /* required */,
  AllowClassicFlow: true, // || false,
  CognitoIdentityProviders: [
    // {
    //   ClientId: 'STRING_VALUE',
    //   ProviderName: 'STRING_VALUE',
    //   ServerSideTokenCheck: true || false,
    // },
    /* more items */
  ],
  DeveloperProviderName: 'STRING_VALUE',
  IdentityPoolTags: {
    // '<TagKeysType>': 'STRING_VALUE',
    /* '<TagKeysType>': ... */
  },
  OpenIdConnectProviderARNs: [
    // 'STRING_VALUE',
    /* more items */
  ],
  SamlProviderARNs: [
    // 'STRING_VALUE',
    /* more items */
  ],
  SupportedLoginProviders: {
    '<IdentityProviderName>': 'STRING_VALUE',
    /* '<IdentityProviderName>': ... */
  },
}

const run = async params2 => {
  await getCreatedIdentityPool(params2)
}

run(params)
