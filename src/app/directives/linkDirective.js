'use strict';
/**
 * @ngdoc directive
 * @class linkDirective
 * @description Create a link to somewhere.
 * @memberOf gulpAngular.directives
 */
angular.module('gulpAngular.directives')
.directive('linkDirective', [function() {
  return {
    restrict: 'E',
    template: '<a href="http://google.com">Search</a>'
  };
}]);