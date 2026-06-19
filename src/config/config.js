require('dotenv').config();

module.exports = {
    BACKEND_URL: process.env.BACKEND_URL || 'http://localhost:8080',
    BFF_PORT: process.env.BFF_PORT || 3000,
    JWT_SECRET: process.env.JWT_SECRET || 'default-secret'
};