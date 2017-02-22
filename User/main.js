var books = angular.module("books", []);
books.controller("BooksController", function($scope, $http) {
  var url = 'http://localhost:3000/books'
  $http.get(url).then(function(response) {
    $scope.books = response.data;  
  });
});
