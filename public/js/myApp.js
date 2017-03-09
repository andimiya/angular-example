// creates and registers angular && importing dependencies
angular.module('myApp', [])

// accesses it from other javascript files or from anywhere in the application
var myApp = angular.module('myApp')

myApp
  .config(() => {

  })
  .run(() => {
    console.log('i am running angular!')
  })
