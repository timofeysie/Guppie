'use strict';
/**
 * @description Date and time utility
 * @class appDatetime
 * @memberOf gulpAngular.directives
 */
angular.module('gulpAngular.directives')
.directive('appDatetime', function ($window) {
    return {
        restrict: 'A',
        require: 'ngModel',
        /**
         * @memberof gulpAngular.directives.appDatetime
         * @param {scope} scope the parent scope
         * @param {ele} ele html element
         * @param {attrs} ele html element
         * @param {controller} cameraCtrl the camera controller
         */
        link: function (scope, element, attrs, ngModel) {
            /**
            * @memberof gulpAngular.directives.appDatetime
            * @param {var} value the current time in milliseconds
            * @returns {var} the current time
            */
            function parser(value) {
                var m = moment(value);
                var valid = m.isValid();
                ngModel.$setValidity('datetime', valid);
                if (valid) {
                    return m.valueOf();
                } else {
                    return value;
                }
            }

            function formatter(value) {
                var m = moment(value);
                var valid = m.isValid();
                if (valid) { 
                    return m.format('LLLL');
                } else { 
                    return value;
                }
            }

            var moment = $window.moment;
            ngModel.$formatters.push(formatter);
            ngModel.$parsers.push(parser);

            element.on('change', function (e) {
                var element = e.target;
                element.value = formatter(ngModel.$modelValue);
            });
        }
    };
});