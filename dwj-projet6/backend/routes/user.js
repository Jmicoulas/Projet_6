const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

const auth = require('../middleware/auth');

router.post(auth, '/auth/signup', userCtrl.signup);
router.post(auth, '/auth/login', userCtrl.login);

module.exports = router;
