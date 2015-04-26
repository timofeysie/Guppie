'use strict';

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
    	function calculateAge () {
	    	var birthday = form.birthday.value;
	    	var isBorn = checkAge.isBorn(birthday);
	    	console.log('isBorn? '+isBorn);
	};
}]);
