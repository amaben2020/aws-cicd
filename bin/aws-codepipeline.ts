#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsCodepipelineStack } from '../lib/aws-codepipeline-stack';

const app = new cdk.App();
new AwsCodepipelineStack(app, 'AwsCodepipelineStack', {});

// app.synth();
