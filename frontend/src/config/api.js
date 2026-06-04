// Central API configuration
// In development, uses localhost:8000.
// In production (Vercel), uses the REACT_APP_API_URL environment variable
// which should point to your Railway/Render backend URL.

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

export default API_BASE_URL;
