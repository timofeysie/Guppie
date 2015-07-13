'use strict';
/**
 * @description Creates the camera view and controls the snapshot ability.
 * @class camera
 * @ngdoc directive
 * @name camera
 * @memberOf gulpAngular.directives
  * @returns {Object} return what
  * @param {Object} scope 
  * @param {Element} JQueryor JQuery lite element
  * @param {Array} attrs introspection would be nice
 */
angular.module('gulpAngular.directives')
.directive('camera', function(CameraService) {
  return {
    restrict: 'EA',
    replace: true,
    transclude: true,
    scope: {},
    controller: function($scope, $q, $timeout) {
	  this.takeSnapshot = function() {
	    var canvas  = document.querySelector('canvas'),
	        ctx     = canvas.getContext('2d'),
	        videoElement = document.querySelector('video'),
	        d       = $q.defer();
	    console.log('canvas? ',canvas);
	    canvas.width = $scope.w;
	    canvas.height = $scope.h;
	    $timeout(function() {
	      ctx.fillRect(0, 0, $scope.w, $scope.h);
	      ctx.drawImage(videoElement, 0, 0, $scope.w, $scope.h);
	      d.resolve(canvas.toDataURL());
	      console.log('canvas data '+canvas.getImageData());
	    }, 0);
	    return d.promise;
	  }
	},
    template: '<div class="camera"><video class="camera" autoplay="" /><div ng-transclude></div></div>',
    link: function(scope, ele, attrs) {
    	console.log('camera directive called');
      	var w = attrs.width || 320,
           h = attrs.height || 200;

      	if (!CameraService.hasUserMedia) {
      		console.log('cmaera service failed has media check');
      		return;
      	}
	      var userMedia = CameraService.getUserMedia(),
	          videoElement = document.querySelector('video');
	      var onSuccess = function(stream) {
			if (navigator.mozGetUserMedia) {
			    videoElement.mozSrcObject = stream;
			} else {
			    var vendorURL = window.URL || window.webkitURL;
			    videoElement.src = window.URL.createObjectURL(stream);
			}
			// Just to make sure it autoplays
			videoElement.play();
			}
			// If there is an error
			var onFailure = function(err) {
			  console.error(err);
			}
			// Make the request for the media
			navigator.getUserMedia({
			  video: {
			    mandatory: {
			      maxHeight: h,
			      maxWidth: w
			    }
			  }, 
			  audio: false
			}, onSuccess, onFailure);
		scope.w = w;
		scope.h = h;
    }
  }
});