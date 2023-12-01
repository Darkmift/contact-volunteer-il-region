import 'dotenv/config';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { messageVolunteerOnWhatsapp } from './glassix';
import logger from './utils/logger-winston';
import { ContactVolunteerDetails } from './types';

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        logger.log('🚀 ~ file: app.ts:92 ~ lambdaHandler ~ messageOptions:', { event });

        const messageSendResult = await messageVolunteerOnWhatsapp(event as unknown as ContactVolunteerDetails);

        logger.log('🚀 ~ file: app.ts:103 ~ lambdaHandler ~ result:', messageSendResult);
        if (!messageSendResult?.status?.length) {
            throw new Error('message sending may have failed');
        }

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'hello world',
            }),
        };
    } catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'some error happened',
            }),
        };
    }
};
