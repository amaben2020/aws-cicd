import { APIGatewayProxyResult } from 'aws-lambda';
async function handler(): Promise<APIGatewayProxyResult> {
  return {
    statusCode: 200,
    body: 'Hello',
  };
}

export { handler };
