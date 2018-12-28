//npm install express
//node server.js
//http://127.0.0.1:3333/

var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static('build'));

app.get('*', function(req, res){
	fs.readFile('./build/templates/index.html','utf-8',function(err, data){
		console.log(data);
		res.send(data);
	});

});

app.listen('3333');