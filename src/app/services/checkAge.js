'use strict';
angular.module('gulpAngular.services')
.factory('checkAge', function() {
	var checkAge = {};

	checkAge.isBorn = function(birthday)
	{
		var isBorn = true;
		var born = new Date(birthday);
    	var then = born.getTime();
		var today = new Date();
		var now = today.getTime();
    	var userAge = now - then;
    	//var day = born.getDate();
		//var month = born.getMonth();
		//var year = born.getFullYear();
    	//console.log('birthday '+birthday);
    	//console.log('born '+born.toString());
    	//console.log(year+' '+month+' '+day);
    	//console.log('then '+then);
    	console.log('age '+userAge);
    	if (then>now) {
    		isBorn = false;
    	}
		return isBorn;
	};
	return checkAge;
});
