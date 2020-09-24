const jwt = require('jsonwebtoken');
const { apiKey } = require('../config');
const { User, Role } = require('../models');

const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        return res.status(403).json({ status: 'error', message: 'No token provided' });
    }

    jwt.verify(token, apiKey, async (err, decoded) => {
        if (err) {
            return res.status(401).json({ status: 'error', message: 'Unauthorized!' });
        }

        req.userId = decoded.id;
    });
};

const isAdmin = (req, res, next) => {
    User.findById(req.userId).exec((err, user) => {
        if (err) {
            return res.status(500).json({ status: 'error', message: err });
        }

        Role.find({ _id: { $in: user.roles } }, (err, roles) => {
            if (err) {
                return res.status(500).json({ status: 'error', message: err });
            }

            if (roles.includes('admin')) {
                next();
                return;
            }

            return res.status(403).json({ status: 'error', message: 'Wrong permissions!' });
        })
    });
};

module.exports = {
    verifyToken,
    isAdmin
};