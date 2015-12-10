'use strict';

/**
 * @ngdoc overview
 * @name pizzaAngularApp
 * @description
 * # pizzaAngularApp
 *
 * Main module of the application.
 */
var pizzaAngularApp = angular
  .module('pizzaAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);
pizzaAngularApp.controller('MyCtrl', function($scope, $location) {
  $scope.go = function (path) {
    $location.path(path);
  };
});
  pizzaAngularApp.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    $httpProvider.defaults.headers.common["Accept"] = "application/json";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
  }
  ]);
  pizzaAngularApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl',
        controllerAs: 'cart'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
