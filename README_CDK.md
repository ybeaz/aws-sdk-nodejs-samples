# Cloud Development Kit (CDK)

## CloudFormation

1. Create and deply a service on AWS CloudFormation
   - DevOOps authentication/ credentials storage: root `cdk.json`
   - Project forder structure: `src` > `cloudFormation` > `projectName` (example: project-01-nginx)
   - Available regions: `cdk.context.json`
   - settings: `cdk.json`
   - Command to deploy: `yarn buildCdk`, see commands orchestration in `package.json`
     - compile code `"buildCloudFormationCdk": "npx esbuild --bundle src/cloudFormation/project-01-nginx/WebserverDevNginx.ts -outdir=cdk.out --minify --sourcemap --platform=node"`, outDir: `cdk.out`,
     - add required metafiles: `"synthesizeStackCdk": "npx cdk synthesize"` to `cdk.out`,
     - upload resources lib to AWS CloudFormation service: `"bootstrapCdk": "npx cdk bootstrap"`,
     - deploy an instance from AWS resources to AWS server `"deployCdk": "npx cdk deploy"` from `resources lib`,
   - Get started another project
     - create a folder for new project in `src > cloudFormation`
     - edit `src` > `cloudFormation` > `projectName` > `cdk.json`
     - copy `src` > `cloudFormation` > `projectName` > `cdk.json` to the root
     - run `yarn buildCdk`
   - Control and test results in AWS: [https://console.aws.amazon.com/cloudformation/](https://console.aws.amazon.com/cloudformation/)
     - [Cloud formation console](https://console.aws.amazon.com/cloudformation/) > Particular service > Outputs > open links, example [link](http://webse-servi-1j3xejz1zho25-1770200024.us-east-1.elb.amazonaws.com/)

<br />

## Links

- [AWS CDK CLI commands and flags](AWS CDK Toolkit (cdk command))
- Example of environments implementations - [Deploying your CDK app to different stages and environments](https://taimos.de/blog/deploying-your-cdk-app-to-different-stages-and-environments)
- Bootstaping in details - [Bootstrapping](https://docs.aws.amazon.com/cdk/v2/guide/bootstrapping.html)
- AWS::CloudFormation::CustomResource - [link](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cfn-customresource.html)
- AWS CloudFront - [link](https://aws.amazon.com/cloudfront/)
- How To Configure CloudFront Using CloudFormation Template - [link](https://hackernoon.com/how-to-configure-cloudfront-using-cloudformation-template-2c263u56)

<br />
