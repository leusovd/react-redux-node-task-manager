const express = require('express');
const cors = require('cors');
const api = require('../api');
const config = require('../config');

module.exports = ({ app }) => {
    app.use(cors());

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    
    // app.use(config.api.prefix, api);

    app.get('/', (req, res, next) => {
        res.json({message: 'Welcome to todo-app!'});
    });

    // app.use((req, res, next) => {
    //     const err = new Error('Not Found');
    //     err.code = 404;
    //     next(err);
    // });

    app.use((err, req, res, next) => {
        if (err.name === 'UnauthorizedError') {
            return res.status(err.code)
                .send({ status: 'error', message: err.message })
                .end();
        }
        return next(err);
    });
    
    app.use((err, req, res, next) => {
        res.status(err.code || 500).send({ status: "error", message: err.message });
    });
};

