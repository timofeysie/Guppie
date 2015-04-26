'use strict';

angular.module('gulpAngular.directives')
.directive('cameraControlSnapshot', function() {
  return {
    restrict: 'EA',
    require: '^camera',
    scope: true,
    template: '<a class="btn btn-info" ng-click="takeSnapshot()">Take snapshot</a>',
    link: function(scope, ele, attrs, cameraCtrl) {
      scope.takeSnapshot = function() {
        cameraCtrl.takeSnapshot()
        .then(function(image) {
          // data image here
          console.log('image ',image);
        });
      }
    }
  }
})