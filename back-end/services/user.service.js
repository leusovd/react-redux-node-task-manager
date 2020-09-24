const bcrypt = require('bcryptjs');
const { User, Role } = require('../models');
const { generateJWT } = require('../utils');

const signup = async ({ email, password }) => {
    let user = new User({ 
        email, 
        password: bcrypt.hashSync(password, 8)
    });    

    const userRole = await Role.findOne({ name: 'user' }).exec();

    user.roles = [userRole._id];

    user = await user.save();
    user = await User.populate(user, { path: 'roles' });

    return {
        id: user._id,
        email: user.email,
        roles: user.roles.map((role) => role.name),
        accessToken: generateJWT(user._id)
    };
};

const signin = async ({ email, password }) => {
    const user = await User.findOne({ email })
        .populate('roles')
        .exec();

    if (!user) {
        const error = new Error('User not found!');
        error.statusCode = 404;
        throw error;
    }

    const isPasswordValyd = bcrypt.compareSync(
        password,
        user.password
    );

    if (!isPasswordValyd) {
        const error = new Error('Wrong Password!');
        error.statusCode = 401;
        throw error;
    }

    return {
        id: user._id,
        email: user.email,
        roles: user.roles.map((role) => role.name),
        accessToken: generateJWT(user._id)
    };
};

module.exports = {
    signup,
    signin
}