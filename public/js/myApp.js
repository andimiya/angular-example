// creates and registers angular && importing dependencies
angular.module('myApp', [])

// accesses it from other javascript files or from anywhere in the application
var myApp = angular.module('myApp')

myApp
  .config(() => {

  })
// rootScope dependency on APP_VERSION
  .run(($rootScope, APP_VERSION) => {
    $rootScope.APP_VERSION = APP_VERSION
  })
