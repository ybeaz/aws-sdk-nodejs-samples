import { Stack, StackProps, App } from 'aws-cdk-lib'
// import { Constract } from 'constructs'
// import * as sqs from 'aws-cdk-lib/aws-ec2'
import * as ec2 from 'aws-cdk-lib/aws-ec2'
import * as ecs from 'aws-cdk-lib/aws-ecs'
import * as ecsPatterns from 'aws-cdk-lib/aws-ecs-patterns'

interface WebserverStackNginxProps extends StackProps {
  /**
   * container image tag
   * @default latest
   */
  readonly imageTag?: string
  /**
   * number of containers
   */
  readonly containerCount: number
}

export class WebserverStackNginx extends Stack {
  constructor(scope: App, id: string, props: WebserverStackNginxProps) {
    super(scope, id, props)

    new ecsPatterns.ApplicationLoadBalancedFargateService(this, 'Service', {
      memoryLimitMiB: 1024,
      cpu: 512,
      taskImageOptions: {
        image: ecs.ContainerImage.fromRegistry(
          `nginx:${props.imageTag ?? 'latest'}`
        ),
      },
      desiredCount: props.containerCount,
    })
  }
}

// export class MyEcsConstructStack extends Stack {
//   constructor(scope: App, id: string, props?: StackProps) {
//     super(scope, id, props)

//     const vpc = new ec2.Vpc(this, 'MyVpc', {
//       maxAzs: 3, // Default is all AZs in region
//     })

//     const cluster = new ecs.Cluster(this, 'MyCluster', {
//       vpc: vpc,
//     })

//     // Create a load-balanced Fargate service and make it public
//     new ecsPatterns.ApplicationLoadBalancedFargateService(
//       this,
//       'MyFargateService',
//       {
//         cluster: cluster, // Required
//         cpu: 512, // Default is 256
//         desiredCount: 6, // Default is 1
//         taskImageOptions: {
//           image: ecs.ContainerImage.fromRegistry('amazon/amazon-ecs-sample'),
//         },
//         memoryLimitMiB: 2048, // Default is 512
//         publicLoadBalancer: true, // Default is false
//       }
//     )
//   }
// }
