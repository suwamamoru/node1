const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')

router.get('/pages/login', authController.respondLogin);
router.get('/pages/register', authController.respondRegister);

module.exports = router;
