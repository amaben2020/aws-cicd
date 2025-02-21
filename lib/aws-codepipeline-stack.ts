import * as cdk from 'aws-cdk-lib';
import {
  CodeBuildStep,
  CodePipeline,
  CodePipelineSource,
  ShellStep,
} from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';
import { PipelineStage } from './PipelineStage';

export class AwsCodepipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'AwesomePipeline', {
      pipelineName: 'AwesomePipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('amaben2020/aws-cicd', 'main'),
        // commands: ['cd aws-codepipeline', 'npm ci', 'npx cdk synth'],
        commands: ['npm ci', 'npm run build', 'npx cdk synth'],
        // primaryOutputDirectory: 'cdk-cicd/cdk.out',
      }),
    });

    const testStage = pipeline.addStage(
      new PipelineStage(this, 'PipelineTestStage', {
        stageName: 'test',
      })
    );

    testStage.addPre(
      new CodeBuildStep('unit-tests', {
        commands: ['cd aws-codepipeline', 'npm ci', 'npx test'],
      })
    );
  }
}
