myApp.controller('BooksController', [
  '$scope',
  'BookService',
 function($scope, BookService){
    $scope.BookService = BookService
}])
