myApp.controller('MainController', [
  '$scope',
  'mainCharacter',
  'CharacterVersionFactory',
 ($scope, mainCharacter, CharacterVersionFactory) => {
    $scope.name = 'Andrea'
    $scope.myModel = 'Ready Player One'
    $scope.mainCharacter = mainCharacter

    $scope.charVersion = CharacterVersionFactory
}])
