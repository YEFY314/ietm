/**
 * Created by YEFY on 2017/8/24.
 */
var express = require('express');
var router = express.Router();
var users = require('../controllers/user_controller');

/* GET login page. */
router.get('/',  function(req, res){
    if(req.session.user){
        res.redirect('/');
    }
    res.render('login');
});

/* POST login page. */
router.post('/',users.login);

router.get('/logout', function(req, res){
    req.session.destroy(function(){
        res.redirect('/login');
    });
});

router.get('/signup', function(req, res){
    if(req.session.user){
        res.redirect('/');
    }
    res.render('signup', {msg:req.session.msg});
});




module.exports = router;