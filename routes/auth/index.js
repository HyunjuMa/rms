//로그인, 로그아웃과 관련된 라우팅
var express = require('express');
var app = express.Router();

//Controller 관리
var auth = require('../../controllers/auth');

//Common 관리
var common = require('../../controllers/common');

//Router 관리
var register = require('./register');

app.use('/register', register);

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('register', { title: 'Register Page' });
});

module.exports = app;


var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../../controllers/auth/profile');
var ctrlAuth = require('../../controllers/index');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
