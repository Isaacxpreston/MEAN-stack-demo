angular.module('tablesModule', ['httpModule'])

.controller('tablesController', function($scope, HttpFactory){
  $scope.post = function(input){
    HttpFactory.post(input).then(function(data){
      $scope.data = data.data
      setTimeout(function(){
        $scope.clear()
      }, 1000)
    })
    $scope.example = null
  }

  $scope.drop = function(){
    HttpFactory.drop().then(function(data){
      $scope.data = data.data
      setTimeout(function(){
        $scope.clear()
      }, 1000)
    })
  }

  $scope.show = function(){
    HttpFactory.show().then(function(data){
      $scope.data = ""
      data.data.forEach(function(string){
        $scope.data = $scope.data.concat(string + "\n")
      })
      setTimeout(function(){
        $scope.clear()
      }, 1000)
    })
  }

  $scope.clear = function(){
    $scope.data = null
  }
})