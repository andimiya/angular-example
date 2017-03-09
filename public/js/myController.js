myApp.controller('MyController', [
  '$scope',
  'mainCharacter',
  'CharacaterVersionFactory',
  ($scope, mainCharacter, CharacaterVersionFactory) => {
  $scope.name = 'Andrea'
  $scope.myModel = 'Ready Player One'
  $scope.mainCharacter = mainCharacter

  $scope.charVersion = CharacaterVersionFactory
}])
