const express = require('express')
const router = express.Router();
const AuthenticationController = require('./controller/AuthenticationController');
const AuthenticationPolicy = require('./policies/AuthenticationPolicy');


router.post('/register', AuthenticationPolicy.register, AuthenticationController.register)
router.post('/login', AuthenticationController.login)
router.post('/token/vertify', AuthenticationController.vertifyToken)

module.exports = router
