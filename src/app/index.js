'use strict';

angular.module('gulpAngular', ['ngTouch', 
  'ngResource', 
  'ngRoute', 
  'ui.bootstrap',
  'ngMaterial',
  'gulpAngular.directives',
  'gulpAngular.controllers',
  'gulpAngular.services'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/form', {
        templateUrl: 'components/forms/birthday.html'
      })
      .when('/date-time/:special/:birthday', {
        templateUrl: 'components/forms/birthday.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
angular.module('gulpAngular.directives', []);
angular.module('gulpAngular.controllers', []);
angular.module('gulpAngular.services', []);
angular.module('gulpAngular').run(
  function ($rootScope, $location, $http, $timeout, userInfo) {
    // this makes userInfo availble to all controllers
    $rootScope.userInfo = userInfo;
});