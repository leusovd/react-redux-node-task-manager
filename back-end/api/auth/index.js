const { Router } = require('express');
const router = new Router();
const { apiErrorHandler } = require('../../utils');
const { signup, signin } = require('./auth.controller');
const { verifySignup } = require('../../middlewares');

const { checkDuplicateEmail } = verifySignup;

router.post('/signup', checkDuplicateEmail, signup);
router.post('/signin', signin);

router.use(apiErrorHandler);

module.exports = router;