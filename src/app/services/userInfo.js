'use strict';
angular.module('gulpAngular.services')
.factory('userInfo', function() {
	var userInfo = {};
	var role;
	var section;

	userInfo.getRole = function()
	{
		return this.role;
	};

	userInfo.setRole = function(_role) {
		this.role = _role;
		return role;
	};

	userInfo.getSection = function()
	{
		return this.role;
	};

	userInfo.setSection = function(_role) {
		this.role = _role;
		return role;
	};
	return userInfo;
});
