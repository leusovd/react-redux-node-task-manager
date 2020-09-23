const expressJwt = require('express-jwt');
const { apiKey } = require('../config');

module.exports = () => {
    return expressJwt({ secret: apiKey, algorithms: ['HS256'] }).unless({
        path: [
            '/auth/login',
            '/auth/signup'
        ]
    });
};