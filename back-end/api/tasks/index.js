const { Router } = require('express');
const router = new Router();
const { apiErrorHandler } = require('../../utils');
const { getAll, post } = require('./task.controller');
const { authJwt } = require('../../middlewares');

router.get('/', authJwt.verifyToken, getAll);
router.post('/', authJwt.verifyToken, post);

router.use(apiErrorHandler);

module.exports = router;