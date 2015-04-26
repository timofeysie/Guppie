'use strict';

angular.module('gulpAngular.controllers')
  .controller('form2Controller', ['$scope',
    '$controller',
  	function ($scope, $controller) {
    	angular.extend(this, $controller('formController', {$scope: $scope}));
	    console.log('form2Controller');
}]);
