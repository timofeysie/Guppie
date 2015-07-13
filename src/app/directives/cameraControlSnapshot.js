'use strict';
/**
* @description Create a the controls for the camera.
* @memberOf gulpAngular.directives
* @ngdoc directive
* @class cameraControlSnapshot
*/
angular.module('gulpAngular.directives')
.directive('cameraControlSnapshot', function() {
  return {
    restrict: 'EA',
    require: '^camera',
    scope: true,
    template: '<a class="btn btn-info" ng-click="takeSnapshot()">Take snapshot</a>',
    /**
     * @memberof gulpAngular.directives.cameraControlSnapshot
     * @param {scope} scope html element
     * @param {ele} ele html element
     * @param {attrs} ele html element
     * @param {controller} cameraCtrl the camera controller
     */
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