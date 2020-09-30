const jwt = require('jsonwebtoken');
const { apiKey } = require('../config');
const taskHelper = require('./task-helper');

const generateJWT = (userId) => {
    return jwt.sign({ id: userId }, apiKey, {
        expiresIn: 24 * 60 * 60 //24 hours
    });
};

const apiErrorHandler = (err, req, res, next) => {
    const errorObject = { status: 'error', message: '' };
    let statusCode;

    if (typeof err === 'string') {
        errorObject.message = err;
    } else if (err.joi) {

    } else {
        errorObject.message = err.message;
        statusCode = err.statusCode;
    }

    res.status(statusCode || 500).json(errorObject);
}

module.exports = {
    generateJWT,
    apiErrorHandler,
    taskHelper
};