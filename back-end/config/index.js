const dotenv = require('dotenv');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
    throw new Error('Couldn\'t find .env file');
}

module.exports = {
    port: parseInt(process.env.PORT, 10) || 3000,

    apiKey: process.env.API_KEY,

    api: {
        prefix: '/api'
    },

    db: {
        URL: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mynode.ftonf.mongodb.net/${process.env.DB_DATABASE}`,
        roles: ['user', 'moderator', 'admin']
    }
}