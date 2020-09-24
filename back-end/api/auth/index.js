const { Router } = require('express');
const router = new Router();
const { signup, signin } = require('./auth.controller');
const { verifySignup } = require('../../middlewares');
const { apiErrorHandler } = require('../../utils');

const { checkDuplicateEmail } = verifySignup;

router.post('/signup', signup);
router.post('/signin', signin);

router.use(apiErrorHandler);

module.exports = router;