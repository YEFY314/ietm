var express = require('express');
var router = express.Router();
var users = require('../controllers/user_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.session.user) {
      res.render('index', {username: req.session.username,
        msg:req.session.msg});
    }else {
      req.session.msg = 'Access denied!';
      res.redirect('/login');
    }
});
router.get('/signup', function(req, res){
    if(req.session.user){
        res.redirect('/');
    }
    res.render('signup', {msg:req.session.msg});
});
router.get('/login',  function(req, res){
    if(req.session.user){
        res.redirect('/');
    }
    res.render('login');
});
router.get('/logout', function(req, res){
    req.session.destroy(function(){
        res.redirect('/login');
    });
});
router.post('/login',users.login);

router.post('/signup', users.signup);




module.exports = router;
