var express = require('express');
var http = require('http');
var mongoose = require('mongoose');

var app = express();
var router = express.Router();
var server = http.createServer(app);

mongoose.connect('mongodb://localhost:27017/test');

var schema = {
	title:String,
	articleUrl:String,
	author:String,
	source:String,
	pubDate:String,
	minuteLength:Number,
	wordLength:String
}

var LongRead = mongoose.model('LongRead', schema, 'longreads');

app.get('/longreads', function(req, res) {
	LongRead.find({minuteLength: {$gt: 0, $lt: 15}}, function(err, doc) {
		res.send(doc);
	});
});

server.listen(3000);