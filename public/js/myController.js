myApp.controller('MyController', ['$scope', 'mainCharacter', ($scope, mainCharacter) => {
  $scope.name = 'Andrea'
  $scope.myModel = 'Ready Player One'
  $scope.mainCharacter = mainCharacter
}])
