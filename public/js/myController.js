myApp.controller('MyController', [
  '$scope',
  'mainCharacter',
  'CharacterVersionFactory',
  'BookService',
  'Movies',
 ($scope, mainCharacter, CharacterVersionFactory, BookService, Movies) => {
    $scope.name = 'Andrea'
    $scope.myModel = 'Ready Player One'
    $scope.mainCharacter = mainCharacter

    $scope.charVersion = CharacterVersionFactory

    $scope.BookService = BookService

    // $scope.Movies = Movies.getMovies();

    //Adding this empty Movies array prevents the 'filter is not defined' console error
    $scope.Movies = []

    Movies.getMovies().success(function(movies){
      $scope.Movies = movies;
    })
  // $scope.books = BookService.getBooks();
  // $scope.oneBook = BookService.getBook(1);
}])
