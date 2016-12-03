angular.module('tablesModule', ['httpModule'])

.controller('tablesController', function($scope, HttpFactory){
  $scope.post = function(input){
    HttpFactory.post(input).then(function(data, err){
      $scope.data = data.data
      setTimeout(function(){
        $scope.clear()
      }, 1000)
    })
    $scope.example = null
  }
  $scope.clear = function(){
    $scope.data = null
  }
})