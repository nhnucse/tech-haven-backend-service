export const signup = async (_req, res) => {
    try {
        res.status(200).json({ message: "Hello world" });
    } catch (err) {
        const statusCode = err.status || 500;
        const errorMessage = err.message || 'Internal Server Error';
        res.status(statusCode).json({ error: errorMessage });
    }
};
