var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.send('This is Spalta !!!');
});

app.get('/about',function(req,res){
	res.send('Bite the dust');
});

app.listen(9999);