const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        index: true,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Role'
        }
    ]
});

module.exports = model('User', UserSchema);