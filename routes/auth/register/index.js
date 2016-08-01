//회원 가입과 관련된 라우팅
var express = require('express');
var app = express.Router();

//Controller 관리
var register = require('../../../controllers/auth/register');

//Common 관리
var common = require('../../../controllers/common');

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('auth/register', { title: 'Register Page' });

});

  app.post('auth/reqister', function(req,res){
    var user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.pw = req.body.pw;
    user.imgId = req.body.image;

    user.save(function(err) {
      if(err) {
        console.error(err);
        res.json({result: 0});
        return;
      }
      res.json({result: 1});
    });
  });//create user


module.exports = app;
