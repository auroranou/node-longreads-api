var express = require('express');
var mongoose = require('mongoose');

var app = express();
var router = express.Router();

mongoose.connect('ds047911.mongolab.com:47911/node-longreads');
app.set('port', (process.env.PORT || 5000))

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

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.sendFile('index.html');
})

app.get('/longreads/short', function(req, res) {
	LongRead.find({minuteLength: {$lt: 15}}, function(err, doc) {
		res.send(doc);
	});
});

app.get('/longreads/medium', function(req, res) {
	LongRead.find({minuteLength: {$gt: 15, $lt: 30}}, function(err, doc) {
		res.send(doc);
	});
});

app.get('/longreads/long', function(req, res) {
	LongRead.find({minuteLength: {$gt: 30, $lt: 45}}, function(err, doc) {
		res.send(doc);
	});
});

app.get('/longreads/longest', function(req, res) {
	LongRead.find({minuteLength: {$gt:45}}, function(err, doc) {
		res.send(doc);
	});
});

// app.listen(3000);