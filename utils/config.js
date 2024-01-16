// config.js

// config.js
const dev = process.env.NODE_ENV !== 'production';

export const API_BASE_URL = dev
    ? 'http://localhost:3000/api/'
    : 'https://next-js-udemy-file-route-app.vercel.app/api/';

