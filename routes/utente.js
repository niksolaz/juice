var express = require('express');
var router = express.Router();
var secretKey = "admin";

router.post('/utente',function(req, res, next){
	if(!req.params.key){
		next();
	}
	var mail = req.body.mail;
	var secret = req.body.secret;
	var user = {};
	user.authorised = mail + secret === secretKey ? true : false;
	res.render('mail','secret',user);
});


router.get('/utente/:key',function(req,res){
	var mail = req.params.key;
	var secret = req.params.key;
	var user = {};
	user.authorised = mail + secret === secretKey ? true : false;
	res.render('mail','secret',user);
});

router.get('/utente',function(req,res){
	var user = {
		authorised: false
	}
	res.render('mail','secret',user);
});
module.exports = router;
