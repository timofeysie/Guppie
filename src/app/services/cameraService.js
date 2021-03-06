'use strict';
 /**
  * @function CameraService
  * @memberOf gulpAngular.services
  * @description This is an angularjs service to get the user media information.
  */
angular.module('gulpAngular.services')
.factory('CameraService', function($window) {
	console.log('camera service called');
  var hasUserMedia = function() {
    return !!getUserMedia();
  }

  var getUserMedia = function() {
    navigator.getUserMedia = ($window.navigator.getUserMedia || 
                              $window.navigator.webkitGetUserMedia ||
                              $window.navigator.mozGetUserMedia || 
                              $window.navigator.msGetUserMedia);
    return navigator.getUserMedia;
  }

  return {
    hasUserMedia: hasUserMedia(),
    getUserMedia: getUserMedia
  }
})
