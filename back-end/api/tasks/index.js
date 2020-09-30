const { Router } = require('express');
const router = new Router();
const { apiErrorHandler } = require('../../utils');
const { getAllTasks, postTask, deleteTask, updateTask } = require('./task.controller');
const { authJwt } = require('../../middlewares');

const { verifyToken } = authJwt;

router.get('/', verifyToken, getAllTasks);
router.post('/', verifyToken, postTask);
router.delete('/:id', verifyToken, deleteTask);
router.patch('/:id', verifyToken, updateTask)

router.use(apiErrorHandler);

module.exports = router;