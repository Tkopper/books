$(document).ready(function(){
    var app = angular.module('books', [ 'ngRoute' ]);
    $.ajax({
      url: 'http://localhost:3000/books',
      method: 'GET'
    }).done(function(r){
      var books = [];
      books = r;
      app.controller('BooksController', function(){
        this.thing = books[0];
      })

      console.log(books);
    })
});
