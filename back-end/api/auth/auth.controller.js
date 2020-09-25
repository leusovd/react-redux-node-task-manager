const { userService } = require('../../services');

exports.signup = async (req, res, next) => {
    const { email, password } = req.body;
    let user;

    try {
        user = await userService.signup({ email, password });
    } catch (err) {
        next(err);
        return;
    }

    res.json({ status: 'ok', payload: user });
};

exports.signin = async (req, res, next) => {
    const { email, password } = req.body;
    let user;

    try {
        user = await userService.signin({ email, password });
    } catch (err) {
        next(err);
        return;
    }

    res.json({ status: 'ok', payload: user });
};