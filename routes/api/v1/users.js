const express = require('express');
const passport = require('passport');
const router = express.Router();
const userApi = require('../../../controllers/api/v1/users_api')


//route for register the doctor
router.post('/register', userApi.register); 

//route for login the doctor
router.post('/login', userApi.login);


module.exports = router;