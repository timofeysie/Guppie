'use strict';
/**
* @ngdoc controller
* @name NavbarCtrl
* @description Controller for the navbar.
*/
angular.module('gulpAngular')
  .controller('NavbarCtrl', function ($scope) {
    $scope.date = new Date();
  });
