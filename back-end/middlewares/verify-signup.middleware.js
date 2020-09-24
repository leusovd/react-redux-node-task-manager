const { User } = require('../models');

const checkDuplicateEmail = async (req, res, next) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email }).exec();

        if (user) {
            res.status(400).json({ status: 'error', message: 'Email already exists!'});
            return;
        }
    } catch (err) {
        res.status(500).json({ status: 'error', message: err });
        return;
    }

    next();
};

module.exports = {
    checkDuplicateEmail
};