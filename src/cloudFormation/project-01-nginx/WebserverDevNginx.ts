import { App } from 'aws-cdk-lib'

// import { WebserverStackNginx } from './cloudFormation/project-01-nginx/WebserverStackNginx'
import { WebserverStackNginx } from './WebserverStackNginx'

/**
 * @description This is an execution file for webserver-dev
 * @link https://taimos.de/blog/deploying-your-cdk-app-to-different-stages-and-environments
 * @link https://bobbyhadz.com/blog/aws-cdk-lambda-layers
 */

const app = new App()
// Development stage
new WebserverStackNginx(app, 'Webserver-dev', {
  env: { account: '465969086547', region: 'us-east-1' },
  imageTag: '1.19.6',
  containerCount: 1,
})
