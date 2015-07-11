'use strict';

angular.module('gulpAngular.directives')
.directive('linkDirective', [function() {
  return {
    restrict: 'E',
    template: '<a href="http://google.com">Search</a>'
  };
}]);