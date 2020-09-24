const verifySignup = require('./verify-signup.middleware');
const authJwt = require('./auth-jwt.middleware');

module.exports = {
    verifySignup,
    authJwt
};