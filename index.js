var express = require('express');
var app = express();

//GET request
app.get('/',function(req,res){
	//res.send('This is Spalta !!!');
	res.sendFile(__dirname + '/index.html');
});

app.get('/about',function(req,res){
	res.send('BITE THE DUST');
});

//POST request
app.post('/about',function(req,res){
	res.send('I dont like monday.');
});

app.listen(9999);