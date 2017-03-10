// creates and registers angular && importing dependencies
angular.module('myApp', ['ngRoute'])

// accesses it from other javascript files or from anywhere in the application

var myApp = angular.module('myApp')

myApp
  .config((MoviesProvider, $routeProvider) => {
    MoviesProvider.setEndpoint('/api/movies')

  $routeProvider
    .when('/', {
      templateUrl: 'views/default.html'
    })
    .when('/books', {
      templateUrl: 'views/books.html',
      controller: 'BooksController'
    })
    .when('/movies', {
      templateUrl: 'views/movies.html',
      controller: 'MoviesController'
    })
})
