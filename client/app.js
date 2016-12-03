angular.module('myClient', ['ui.router', 'tablesModule'])

.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/tables')

  $stateProvider
  .state('tables', {
    url:'/tables',
    templateUrl: './client/table_view/tables.html',
    controller: 'tablesController'
  })
})