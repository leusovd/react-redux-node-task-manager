const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
    label: String,
    important: {
        type: Boolean,
        default: false
    },
    done: {
        type: Boolean,
        default: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    toObject: {
        transform: (doc, ret) => {
            const id = ret._id;
            delete ret._id;
            delete ret.user;
            delete ret.__v;

            return Object.assign(ret, { id });
        }
    }
});

module.exports = model('Task', taskSchema);