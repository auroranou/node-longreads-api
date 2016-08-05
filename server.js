let express = require('express');
let mongoose = require('mongoose');

let app = express();
let router = express.Router();

let schema = mongoose.Schema({
  articleUrl: String,
  author: String,
  minutes: Number,
  pubDate: String,
  source: String,
  title: String,
  words: Number
});

let Article = mongoose.model('Article', schema);

let uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/test';
let port = process.env.PORT || 5000;

mongoose.connect(uri);

app.set('port', port);

app.use(express.static(`${__dirname}/public`));

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.get('/longreads', (req, res) => {
  Article.find((err, doc) => {
    res.send(doc);
  });
});

app.get('/longreads/short', (req, res) => {
  Article.find({
    minutes: {
      $lt: 15
    }
  }, (err, doc) => {
    res.send(doc);
  });
});

app.get('/longreads/medium', (req, res) => {
  Article.find({
    minutes: {
      $gt: 15,
      $lt: 30
    }
  }, (err, doc) => {
    res.send(doc);
  });
});

app.get('/longreads/long', (req, res) => {
  Article.find({
    minutes: {
      $gt: 30,
      $lt: 45
    }
  }, (err, doc) => {
    res.send(doc);
  });
});

app.get('/longreads/long', (req, res) => {
  Article.find({
    minutes: {
      $gt: 45
    }
  }, (err, doc) => {
    res.send(doc);
  });
});

let server = app.listen(port, () => {
  console.log(`Express server running on ${server.address().port}`);
});
