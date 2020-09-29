const { Task } = require('../models');

const getAll = async (userId) => {
    const taskList = await Task.find({ user: userId })
        .lean()
        .exec();

    if (!taskList.length) {
        const error = new Error('Not Found!');
        error.statusCode = 404;
        throw error;
    }

    return taskList.map((task) => {
        const id = task._id;
        delete task._id;
        delete task.user;
        delete task.__v;
        return Object.assign(task, { id });
    });
};

const post = async (userId, { text }) => {
    let newTask = new Task({ label: text, user: userId });
    newTask = await newTask.save();
    newTask = newTask.toObject();
    
    return newTask;
};

module.exports = {
    getAll,
    post
};