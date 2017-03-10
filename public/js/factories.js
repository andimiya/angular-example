myApp.factory('CharacterVersionFactory', [
  'mainCharacter',
  'APP_VERSION',
  (mainCharacter, APP_VERSION) => {
  return mainCharacter + APP_VERSION;
}])
