'use strict';
module.exports = function(config) {
  var configuration = {
    files: [
      'bower_components/**/*.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-material/angular-material.js',
      'src/app/directives/linkDirectives.spec.js',
      'src/app/services/userInfo.spec.js',
      'src/app/main/main.controller.spec.js',
      'src/app/index.js'
    ],
    exclude: [],
    autoWatch : false,
    frameworks: ['jasmine'],
    ngHtml2JsPreprocessor: {
      stripPrefix: 'src/',
      moduleName: 'gulpAngular'
    },
    browsers : ['PhantomJS'],
    plugins : [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-ng-html2js-preprocessor'
    ],
    preprocessors: {
      'src/**/*.html': ['ng-html2js']
    }
  };
  config.set(configuration);
};