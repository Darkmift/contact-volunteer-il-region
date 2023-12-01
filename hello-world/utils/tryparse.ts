// eslint-disable-next-line @typescript-eslint/no-explicit-any
const tryParse = <T = unknown>(input: any): T => {
    if (!input) {
        return input;
    }
    try {
        // Attempt to parse the input as JSON
        return JSON.parse(input as string) as T;
    } catch (error) {
        // If parsing fails, return the original input
        return input;
    }
};

export default tryParse;
