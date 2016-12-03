angular.module('httpModule', [])
.factory('HttpFactory', function($http){
  return {
    post: function(data){
      return $http({
        method: 'POST',
        url: '/route',
        data: JSON.stringify({input: data})
      })
      .then(function(data, err){
        if(err){
          throw err
        }
        return data
      })
    }
  }
})