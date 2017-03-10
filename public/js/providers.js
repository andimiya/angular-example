myApp.provider('Movies', function(){
  this.endpoint = '';

  this.setEndpoint = function(endpoint){
    this.endpoint = endpoint
  }

  this.$get = function($http){
    var endpoint = this.endpoint

    return {
      getMovies: function(){
        return $http.get(endpoint)
      }
    }
  }
})
