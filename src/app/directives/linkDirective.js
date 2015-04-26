'use strict';

angular.module('gulpAngular.directives')
.directive('linkDirective', [function() {
  return {
    restrict: 'E',
    template: '<a href="http://google.com">Click me to go to Google</a>'
  };
}]);