import logger from './logger-winston';

export const asyncTryCatchWrapper = <T, Args extends never[]>(fn: (...args: Args) => Promise<T>) => {
    return async (...args: Args): Promise<T | undefined> => {
        try {
            return await fn(...args);
        } catch (e) {
            logger.error(e as Error);
        }
    };
};
