const { taskService } = require('../../services');

exports.getAll = async (req, res, next) => {
    const userId = req.userId;

    try {
        const taskList = await taskService.getAll(userId);
        res.json({ status: 'ok', data: taskList });
    } catch (err) {
        next(err);
    }
};

exports.post = async (req, res, next) => {
    const userId = req.userId;
    const { label } = req.body;

    try {
        const task = await taskService.post(userId, { text: label });
        res.json({ status: 'ok', data: task });
    } catch (err) {
        console.log(err);
        next(err);
    }
};