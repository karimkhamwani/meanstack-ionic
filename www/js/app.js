// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic']);

/*********************************
 Controllers
 *********************************/

app.controller('HomeController', function($scope,$http,$location){

    // Set local scope to persisted user data
    console.log("hey")
    $scope.username = "karim"
    $http({
        method: 'GET',
        url: '/user'
    })
        .success(function(response){
            //$scope.message = response;
            console.log(response)
        })
        .error(function(response){
            alert(response);
            }
    );
    $scope.test = function(){
      console.log('in tsest')
      $location.path('/new')
    }
   
});


app.controller('NewController', function($scope,$http){

    // Set local scope to persisted user data
    console.log("hey from new controller")
   
});


app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'HomeController',
         cache:false
      })
   .state('new', {
        url: '/new',
        templateUrl: 'views/new.html',
        controller: 'NewController',
         cache:false
      })




  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise('');
})
