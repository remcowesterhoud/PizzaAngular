'use strict';

angular.module('pizzaAngularApp').controller('MainCtrl', function ($scope, $resource) {

  var pizzaResource = $resource(
    'http://127.0.0.1:10080/pizzas/:pizzaId',
    {pizzaId: '@pizzaId'},
    {update: {method: 'PUT'}}
  );

  $scope.pizzas = pizzaResource.query();

  $scope.newPizza = {};

  $scope.savePizza = function () {
    pizzaResource.save($scope.newPizza, function() {
      $scope.pizzas = pizzaResource.query();
    });
    $scope.newPizza = {};
  };

  $scope.deletePizza = function (pizza) {
    pizzaResource.delete({pizzaId: pizza.id},
      function(){
        $scope.pizzas.splice($scope.pizzas.indexOf(pizza), 1);
      },
      function(){}
    );

  };
});
