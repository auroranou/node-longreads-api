var express = require('express');
var http = require('http');

var app = express();
var router = express.Router();
var server = http.createServer(app);

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000);