// creates and registers angular && importing dependencies
angular.module('myApp', ['ngRoute'])

// accesses it from other javascript files or from anywhere in the application

var myApp = angular.module('myApp')

myApp
  .config((MoviesProvider, $routeProvider, $locationProvider) => {
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

TC8715D5F4B23

  $locationProvider.html5Mode({enabled: true, requireBase: false})
  })
  .run(($rootScope, APP_VERSION) => {
    $rootScope.APP_VERSION = APP_VERSION
})
