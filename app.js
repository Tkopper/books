
var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient
var http = require('http');
var grim = []
MongoClient.connect('mongodb://localhost:27017/library', function (err, db) {
  if (err) throw err

  db.collection('books').find().toArray(function (err, result) {
    if (err) throw err

    // console.log(result)
  })
})

// respond with "hello world" when a GET request is made to the homepage
app.get('/about', function (req, res) {
  getBookByTitle(grim);
  res.json(grim)
})

app.listen(3000, function(){
  getBookByTitle(grim);
  console.log(grim);
  console.log(('Example app listening on port 3000!'));
});

var getBookByTitle = function (grim){
  db.test.find({title : 'Grimm Brothers'}).toArray(grim)
}
