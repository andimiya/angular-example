myApp.controller('MoviesController', [
  '$scope',
  'Movies',
 function($scope, Movies){
    $scope.Movies = []

    Movies.getMovies().success(function(movies){
      $scope.Movies = movies;
    })
}])
