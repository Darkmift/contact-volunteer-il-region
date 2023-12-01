import { cleanEnv, str } from 'envalid';
import logger from '../utils/logger-winston';

const env = cleanEnv(
    process.env,
    {
        GLASSIX_UNIQUE_TOKEN: str(),
        GLASSIX_UNIQUE_URL: str(),
        GLASSIX_FROM_PHONE_NUMBER: str(),
        GLASSIX_WABA: str(),
    },
    {
        reporter: ({ errors }) => {
            logger.info(`There are errors in the environment variables:`, { errors });
        },
    },
);

export default env;
