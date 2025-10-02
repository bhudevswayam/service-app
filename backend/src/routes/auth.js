const express = require('express');
const router = express.Router();
const { register, login, registerBusiness } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
router.post('/register-business', registerBusiness);

module.exports = router;
