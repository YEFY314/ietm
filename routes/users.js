var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/signup', function(req, res){
  if(req.session.user){
    res.redirect('/');
  }
  res.render('signup', {msg:req.session.msg});
});

router.post('/signup', function (req, res) {


})

module.exports = router;
