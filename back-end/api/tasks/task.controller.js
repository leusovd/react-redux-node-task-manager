const { taskService } = require('../../services');

exports.getAllTasks = async (req, res, next) => {
    const userId = req.userId;

    try {
        const taskList = await taskService.getAll(userId);
        res.json({ status: 'ok', payload: taskList });
    } catch (err) {
        next(err);
    }
};

exports.postTask = async (req, res, next) => {
    const userId = req.userId;
    const { text } = req.body;

    try {
        const task = await taskService.post(userId, text);
        res.json({ status: 'ok', payload: task });
    } catch (err) {
        next(err);
    }
};

exports.deleteTask = async (req, res, next) => {
    const { id } = req.params;

    try {
        await taskService.deleteOne(id);
        res.json({ status: 'ok' });
    } catch (err) {
        next(err);
    }
};

exports.updateTask = async (req, res, next) => {
    const { id } = req.params;
    const { property, value } = req.body;

    try {
        const updatedTask = await taskService.update(id, property, value);
        res.json({ status: 'ok', payload: updatedTask });
    } catch (err) {
        next(err);
    }
};