myApp.filter('beforeYearFilter', function(){
  return function(array, year){
    return array.filter(function(item){
      return item.year < year;
    })
  }
})
