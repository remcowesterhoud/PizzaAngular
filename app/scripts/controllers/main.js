'use strict';

angular.module('pizzaAngularApp').controller('MainCtrl', function ($scope, $resource) {

  var pizzaResource = $resource(
    'http://127.0.0.1:10080/pizzas/:pizzaId',
    {pizzaId: '@pizzaId'},
    {update: {method:  'PUT'}}
  );

    $scope.pizzas = pizzaResource.query();
});
