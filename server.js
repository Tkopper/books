
var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient
var http = require('http');
var path = require('path');

MongoClient.connect('mongodb://localhost:27017/books', function (err, db) {
  if (err) throw err

  app.get('/books', function(req, res) {
    db.collection('library').find().toArray(function (err, result) {
      if (err) throw err
      res.send(result)
    })
  })

})

// respond with "hello world" when a GET request is made to the homepage
app.use('/', express.static(__dirname + '/User'));


app.listen(3000, function(){
  console.log(('Example app listening on port 3000!'));
});
