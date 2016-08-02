//회원 가입과 관련된 라우팅
var express = require('express');
var app = express.Router();

//Controller 관리
var register = require('../../../controllers/auth/register');

//Common 관리
var common = require('../../../controllers/common');

module.exports = function(app, User) {

  /* GET home page. */
  app.get('/', function(req, res, next) {
    //res.render('auth/register', { title: 'Register Page' });
    User.find(function(err, users){
      if(err) return res.status(500).send({error: 'db failure'});
      res.json(users);
    })
  });

  app.post('/', function(req,res){
    var user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.pw = req.body.pw;
    user.imgId = req.body.imgId;

    user.save(function(err) {
      if(err) {
        console.error(err);
        res.json({result: 0});
        return;
      }
      res.json({result: 1});
    });
  });//create user

}


module.exports = app;
