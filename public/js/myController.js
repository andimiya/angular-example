myApp.controller('MyController', [
  '$scope',
  'mainCharacter',
  'CharacaterVersionFactory',
  'BookService',
  ($scope, mainCharacter, CharacaterVersionFactory, BookService) => {
  $scope.name = 'Andrea'
  $scope.myModel = 'Ready Player One'
  $scope.mainCharacter = mainCharacter

  $scope.charVersion = CharacaterVersionFactory

  $scope.BookService = BookService

  // $scope.books = BookService.getBooks();
  // $scope.oneBook = BookService.getBook(1);
}])
