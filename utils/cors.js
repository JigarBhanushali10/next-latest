// utils/cors.js
import Cors from 'cors';

// Initializing the cors middleware
const cors = Cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'HEAD', 'POST', 'OPTIONS', 'PUT', 'DELETE', 'PATCH'],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
export async function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }

            return resolve(result);
        });
    });
}

export default cors;
