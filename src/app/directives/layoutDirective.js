'use strict';
/**
 * @ngdoc directive
 * @class linkDirective
 * @description Create a link to somewhere.
 * @memberOf gulpAngular.directives
 */
angular.module('gulpAngular.directives')
.directive('layoutDirective', [function() {
  return {
    templateUrl: 'components/layout/layoutTemplate.html',
    link: function () { }
  };
}]);