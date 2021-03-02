const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const regexEmail = require('../middleware/regexEmail');

router.use('/signup', regexEmail, userCtrl.signup);
router.use('/login', regexEmail, userCtrl.login);

module.exports = router;