var http = require('http');
var server = http.createServer(function(req,res){
	res.end('OK');
});

server.listen(9999);
