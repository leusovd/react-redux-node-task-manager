const jwt = require('jsonwebtoken');
const { apiKey } = require('../config');
const { User, Role } = require('../models');

const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        res.status(403).json({ status: 'error', message: 'No token provided' });
        return;
    }

    jwt.verify(token, apiKey, async (err, decoded) => {
        if (err) {
            res.status(401).json({ status: 'error', message: 'Unauthorized!' });
            return;
        }

        req.userId = decoded.id;
    });
};

const isAdmin = (req, res, next) => {
    User.findById(req.userId).exec((err, user) => {
        if (err) {
            res.status(500).json({ status: 'error', message: err });
            return;
        }

        Role.find({ _id: { $in: user.roles } }, (err, roles) => {
            if (err) {
                res.status(500).json({ status: 'error', message: err });
                return;
            }

            if (roles.includes('admin')) {
                next();
                return;
            }

            res.status(403).json({ status: 'error', message: 'Wrong permissions!' });
        });
    });
};

module.exports = {
    verifyToken,
    isAdmin
};