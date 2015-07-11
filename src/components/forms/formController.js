'use strict';
/**
 * @ngdoc controller
 * @name formController
 * @description Calculates the age from the birthday form value.
 */
angular.module('gulpAngular.controllers')
  .controller('formController', ['$scope',
    '$rootScope', 
    'checkAge',
    'userInfo', 
    'CameraService',
  	function ($scope, $rootScope, checkAge, userInfo, CameraService) {
    	var vm = this;
      vm.role = $scope.userInfo.getRole();
      $scope.hasUserMedia = CameraService.hasUserMedia;
      console.log('formController');
    	vm.user = {special:18};
    	vm.calculateAge = calculateAge;
      
     /**
     * Returns the attributes of an element as hash
     * @memberof calculateAge
     * @param {HTMLElement} el html element
     * @returns {Hash} attributes
     */
    	function calculateAge () {
	    	var birthday = form.birthday.value;
	    	var isBorn = checkAge.isBorn(birthday);
	    	console.log('isBorn? '+isBorn);
	};
}]);
