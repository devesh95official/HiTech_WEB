const express = require('express');
const router = express.Router();
const {signinUser,signupUser,signinGetUser,signupGetUser} = require('../controllers/auth');

// Signup
router.get('/signup', signupGetUser);
router.post('/signup', signupUser);

// Signin
router.get('/signin', signinGetUser);
router.post('/signin', signinUser);


module.exports = router;