/**
 * https://github.com/brinley/jSignature
 * Angular directive source: gist.github.com/escapedcat/6be8ab86c97be42b6882
 *
 * based on:
 * "jSignature": "2.0.2",
 * "angular": "1.3.11",
 * "jquery": "2.1.3"
 * 
 * include at least these jSignature files: 
 * 'jSignature/src/jSignature.js',
 * 'jSignature/src/plugins/jSignature.CompressorBase30.js'
 *
 * Usage:
 * <j-signature-directive sig="your.signature.model" bg-color="#00f" color="#ffcc00"></j-signature-directive>
 */
(function() {
  'use strict';
    angular.module('gulpAngular.services')
    .directive('signOnGlass', [function() {
        return {
            restrict: 'E',
            template: '<button type="button" ng-click="reset()">reset</button> <button type="button" ng-click="getData()">save</button>',
            scope: {
                sig: '=',
                width: '@',
                height: '@',
                color: '@',
                bgColor: '@',
                lineWidth: '@',
                cssclass: '@',
                value: '='
            },
            link: function($scope, $element) {
                 //console.log($scope);
                //console.log($scope.formId)
			
/*
width   Defines the width of the canvas. Numerical value without % or px    250
height  Defines the height of the canvas. Numerical value without % or px   150
color   Defines the color of the strokes on the canvas. Accepts any color hex values.   #000
background-color    Defines the background color of the canvas. Accepts any color hex values.   #fff
lineWidth   Defines the thickness of the lines. Accepts any positive numerical value    1
cssclass    Defines a custom class for the canvas.  None
*/

                $scope.initialized = false;
                var options = {
                    width:                  $scope.width,
                    height:                 $scope.height,
                    color:                  $scope.color,
                    backgroundColor:        $scope.bgColor,
                    lineWidth:              $scope.lineWidth,
                    cssclass:               $scope.cssclass
                };
                $scope.initialize = function () {
                    if(!$scope.initialized) {
                        $element.jSignature(options);
                        $scope.initialized = true;
                    }
                };
                $scope.reset = function() {
                    console.log('reset');
                    $element.jSignature('reset');
                };
                $scope.getData = function() {
                    var datapair = $element.jSignature('getData', 'svg');
                    var newData = datapair[1].split('dtd">')[1]; // remove all data except the svg tag
                    var newObj = {'type':'svg', 'data':newData}  // create format: {"type": "svg", "data": "..image data..." }
                    $scope.value = newObj;
                        
                }; 
            
                $scope.setData = function(sig) {
                    var datapair = [];
                    //datapair[0] = "image/svg+xml";
                    //datapair[1] = '"<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="334" height="109"><path fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M 1 108 c 0.35 -0.03 13.36 -1.05 20 -2 c 2.73 -0.39 5.49 -1.06 8 -2 c 2.73 -1.02 5.21 -3 8 -4 c 6.51 -2.32 13.41 -3.66 20 -6 c 3.81 -1.35 7.39 -3.04 11 -5 c 12.03 -6.54 24.6 -12.63 35 -20 c 4.93 -3.49 9.65 -8.98 13 -14 c 3.68 -5.53 6.61 -12.79 9 -19 c 0.8 -2.09 1 -4.68 1 -7 c 0 -5.58 -0.09 -12.23 -1 -17 c -0.27 -1.4 -1.86 -2.86 -3 -4 c -1.46 -1.46 -3.23 -2.97 -5 -4 c -2.1 -1.23 -4.68 -2.82 -7 -3 c -9.73 -0.75 -21.54 -0.92 -32 0 c -8.33 0.73 -17.07 2.7 -25 5 c -4.45 1.29 -8.78 3.72 -13 6 c -3.84 2.08 -7.6 4.45 -11 7 c -1.84 1.38 -3.57 3.18 -5 5 c -2.19 2.79 -4.71 5.94 -6 9 c -1.21 2.88 -1.7 6.67 -2 10 c -0.36 3.92 -0.82 8.57 0 12 c 0.7 2.94 3.16 6.13 5 9 c 1.15 1.78 2.54 3.54 4 5 c 1.14 1.14 2.56 2.2 4 3 c 4.51 2.51 9.31 5.31 14 7 c 3.35 1.21 7.18 1.39 11 2 c 4.83 0.77 9.28 1.78 14 2 c 9.35 0.45 18.65 0.45 28 0 c 4.72 -0.22 9.45 -0.95 14 -2 c 4.07 -0.94 8.08 -2.43 12 -4 c 2.78 -1.11 5.56 -2.43 8 -4 c 2.13 -1.37 4.21 -3.21 6 -5 c 1.15 -1.15 2.41 -2.59 3 -4 c 0.97 -2.33 1.8 -5.35 2 -8 c 0.45 -6.11 1.12 -13.61 0 -19 c -0.68 -3.31 -3.6 -7.18 -6 -10 c -3.06 -3.6 -7.03 -7.4 -11 -10 c -5.38 -3.52 -11.86 -6.79 -18 -9 c -6.59 -2.37 -13.89 -3.87 -21 -5 c -7.61 -1.21 -15.15 -1.76 -23 -2 c -14.29 -0.44 -28.77 -1.14 -42 0 c -5.28 0.46 -15.32 1.59 -16 5 c -2.84 14.22 -2.75 55.74 1 70 c 1.07 4.06 12.69 5.4 19 6 c 17.41 1.65 36.99 2.02 55 1 c 10.98 -0.62 22.11 -3.33 33 -6 c 8.21 -2.02 16.83 -4.51 24 -8 c 5.27 -2.57 10.6 -6.98 15 -11 c 3.03 -2.77 6.63 -6.5 8 -10 c 1.96 -4.98 3.54 -13.29 3 -18 c -0.3 -2.58 -3.81 -5.47 -6 -8 c -2.17 -2.5 -4.43 -5.65 -7 -7 c -3.79 -1.98 -9.2 -2.95 -14 -4 c -6.01 -1.32 -11.97 -2.48 -18 -3 c -5.62 -0.48 -11.53 -0.64 -17 0 c -5.62 0.66 -11.82 2 -17 4 c -4.78 1.85 -10.02 4.85 -14 8 c -3.67 2.91 -7.24 7.14 -10 11 c -2.08 2.91 -3.87 6.62 -5 10 c -1.13 3.38 -1.67 7.33 -2 11 c -0.33 3.61 -0.85 7.88 0 11 c 0.97 3.56 3.56 8.07 6 11 c 2.22 2.67 5.85 5.27 9 7 c 3.23 1.78 7.3 3.33 11 4 c 6.98 1.27 14.5 1.72 22 2 c 10.87 0.4 21.38 0.83 32 0 c 10.74 -0.84 21.72 -2.48 32 -5 c 7.13 -1.75 14.87 -4.58 21 -8 c 4.64 -2.59 9.31 -7.1 13 -11 c 2.05 -2.16 4 -5.34 5 -8 c 0.85 -2.28 1.42 -5.75 1 -8 c -0.47 -2.5 -2.29 -5.98 -4 -8 c -1.64 -1.94 -4.54 -3.41 -7 -5 c -3.34 -2.16 -6.55 -4.5 -10 -6 c -4.03 -1.75 -8.76 -3.68 -13 -4 c -8.42 -0.63 -19.99 -0.65 -27 1 c -2.57 0.6 -5.11 4.47 -7 7 c -1.97 2.63 -4.42 5.98 -5 9 c -1.25 6.46 -2.12 16.01 -1 22 c 0.62 3.32 4.4 6.91 7 10 c 2.71 3.22 5.68 6.96 9 9 c 4.79 2.95 11.29 5.73 17 7 c 8.75 1.94 18.67 2.85 28 3 c 10.95 0.18 22.6 -0.14 33 -2 c 7.66 -1.37 16.09 -4.64 23 -8 c 4.26 -2.07 8.58 -5.8 12 -9 c 1.64 -1.54 3.4 -4.04 4 -6 c 0.59 -1.9 0.33 -4.83 0 -7 c -0.3 -1.96 -0.83 -4.83 -2 -6 c -1.66 -1.66 -5.28 -3.04 -8 -4 c -2.81 -0.99 -6.01 -1.69 -9 -2 c -3.24 -0.34 -7.07 -0.55 -10 0 c -1.97 0.37 -4.42 1.71 -6 3 c -1.84 1.5 -4.02 3.9 -5 6 c -1.16 2.48 -1.67 6.02 -2 9 c -0.32 2.91 -0.86 6.72 0 9 c 0.88 2.34 3.82 4.82 6 7 c 2.51 2.51 5.17 5.65 8 7 c 3.56 1.69 8.56 2.28 13 3 c 6.03 0.97 12.07 2 18 2 c 7.24 0 15.08 -0.54 22 -2 c 5.35 -1.13 11.39 -3.42 16 -6 c 3.25 -1.82 6.42 -5.2 9 -8 c 1.25 -1.35 2.79 -3.39 3 -5 c 0.37 -2.78 -0.01 -8.86 -1 -10 c -0.63 -0.72 -4.98 0.86 -6 2 c -1.17 1.32 -1.67 4.7 -2 7 c -0.32 2.21 -0.33 4.83 0 7 c 0.3 1.96 0.82 4.71 2 6 c 2.02 2.2 6.09 5.34 9 6 c 3.51 0.8 9.86 -0.16 13 -1 l 2 -3"/></svg>"';  
                    if (sig) {
                        datapair[1] = sig;
                    }
                    //console.log(datapair);
                    $element.jSignature('setData', 'data:' + datapair.join(','));
                };
            
                $scope.initialize();
                $scope.setData();
                $scope.$watch('sig', function (sig) {
                    if(sig) {
                        console.log('watch if ' + sig);
                        $scope.setData(sig);
                        //$scope.getData();
                        return;
                    }
                    $scope.getData();
                });
            }
        };
    }]);
})();