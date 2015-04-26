'use strict';
/**
 * @fileOverview Date validation directive for Smart Forms.
 * @memberOf crownpermits.directives
 * [description] Directive to parse the date to override the custom date validation which
 * could be set to a specific locale.  In Chrome the date chooser forces the
 * date into a yyyy/mm/dd format.  So we create a date based on the value
 * passed in and if it is not rejected as invalide, then our validation will pass.
 * Also, we reuqire that there should be three values, ie: day, month, and year.
 * @author Timothy Curchod
 * @memberOf crownpermits.directives
 * @param  {[type]} ) {	return     {		require: 'ngModel',		link: function (scope, elm, attrs, ctrl) {			var validator [description]
 * @return {[type]}   [description]
 */
angular.module('gulpAngular.directives')
.directive('dateValidate', function () {
	return {
		require: 'ngModel',
		restrict: 'A',
		link: function (scope, elm, attrs, ctrl) {
			var validator = function (value) {
				var date = new Date(value);
				var day = date.getDate();
				var month = date.getMonth()+1;
				var year = date.getFullYear();
				function parseFormat(value) {
					var part0OK = false;
					var part1OK = false;
					var sep = '/';
					if (value.indexOf('/') ===  -1) {
						sep = '-';
					}
					var parts = value.split(sep);
					//console.log('parts 0 '+parts[0]+' 1 '+parts[1]+' 2 '+parts[2]); 
					var part0 = parseInt(parts[0]);
					var part1 = parseInt(parts[1]);
					if ((part0 > 0) && (part0 < 31)) {
						part0OK = true;
					}
					if ((part1 > 0) && (part1 <13)) {
						part1OK = true;
					}
					return (part0OK && part1OK);
				}
				if (date.toString() === 'Invalid Date') {
					ctrl.$setValidity('validDate', false);
					if ((value === '') || (typeof value === 'undefined')) {
						console.log('date is \'\' or undefined');
						ctrl.$setValidity('validDate', false);  // no date or undefined
					} else if (day === 0 || month === 0 || year === 0)
					{
						console.log('missing something: day '+day+' month '+month+' year '+year);
						ctrl.$setValidity('validDate', false); // not a complete date
					} else if (day === isNaN || month === isNaN || year === isNaN)
					{
						console.log('NaN: day '+day+' month '+month+' year '+year);
						ctrl.$setValidity('validDate', false); // something is NaN
					} else if (parseFormat(value)) {
						console.log('Format parse OK');
						ctrl.$setValidity('validDate', true); // Date is able to parse input
					}
				} else
				{
					console.log('OK: day '+day+' month '+month+' year '+year);
					if (year < 1900)
					{
						ctrl.$setValidity('validDate', false);  // sanity check
					} else
					{
						ctrl.$setValidity('validDate', true); // year is OK
					}
				}
				return value;
			};
			ctrl.$parsers = [validator]; // replace all other validators
			ctrl.$formatters = [validator];
		}
	};
});
