/**
 * Created by YEFY on 2017/8/26.
 */
var mysql = require('mysql');
var dbConfig = require('../model/dbConfig');
var userModel = require('../model/userModel');
var ietm_pool = mysql.createPool(dbConfig.ietm);
exports.login = function (req, res) {
    ietm_pool.query(userModel.getUserByUsername,req.body.username,function(err,users){
        if(!users[0]){
            return res.redirect('/login');
        }
        if(users[0].password == req.body.password.toString()){
            req.session.regenerate(function() {
                req.session.user = users[0].id;
                req.session.username = users[0].username;
                req.session.level = users[0].level;
                req.session.msg = 'Authenticated as ' + users[0].username;
                res.redirect('/');
            });
        }else{
            err = "Authentication failed.";
        }
        if(err){
            req.session.regenerate(function(){
                req.session.msg = err;
                res.redirect('/login');
            });
        }
    });
};
exports.signup = function (req, res) {
    ietm_pool.query(userModel.getUserByUsername,req.body.username,function(err,users){
        if(users.length>0){
            res.render("signup",{msg:"username used!"});
        }else{
            ietm_pool.query(userModel.insert,[req.body.username, req.body.password, req.body.email, 0],function(err,results){
                if(err){
                    console.log(err);
                    res.render('signup',{msg:"signup failed!"});
                }else{
                    console.log(results);
                    req.session.regenerate(function() {
                        req.session.user = results.insertId;
                        req.session.username = req.body.username;
                        req.session.level = 0;
                        req.session.msg = 'Authenticated as '+req.body.username;
                        res.redirect('/');
                    });
                }
            })
        }
    });

};

