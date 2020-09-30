const { Task } = require('../models');
const { taskHelper } = require('../utils');

const { taskDocToObject } = taskHelper;

const getAll = async (userId) => {
    const taskList = await Task.find({ user: userId })
        .lean()
        .exec();

    return taskList.map((task) => taskDocToObject(task));
};

const post = async (userId, text) => {
    let newTask = new Task({ label: text, user: userId });
    newTask = await newTask.save();
    newTask = newTask.toObject();
    
    return newTask;
};

const deleteOne = async (id) => {
    const res = await Task.deleteOne({ _id: id });

    if (!res.deletedCount) {
        const error = new Error('Not Found!');
        error.statusCode = 404;
        throw error;
    }
};

const update = async (id, property, value) => {
    const updatedTask = await Task.findByIdAndUpdate(id, { [property]: value }, {
        returnOriginal: false,
        useFindAndModify: false
    }).lean().exec();

    return taskDocToObject(updatedTask);
};

module.exports = {
    getAll,
    update,
    post,
    deleteOne
};