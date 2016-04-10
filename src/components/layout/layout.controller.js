'use strict';
/**
  * @function LayoutController
  * @memberOf gulpAngular
  * @description This is an angularjs controller for the about page.
  */
angular.module('gulpAngular.controllers')
  .controller('LayoutController', ['$scope',
    function ($scope) {

    $scope.things = [
      {
        'title': 'AngularJS',
        'description': 'HTML enhanced for web apps!',
        'logo': 'angular.png',
        'stars': '***'
      },
      {
        'title': 'BrowserSync',
        'url': 'http://browsersync.io/',
        'logo': 'browsersync.png',
        'stars': '****'
      },
      {
        'title': 'GulpJS',
        'url': 'http://gulpjs.com/',
        'description': 'The streaming build system.',
        'stars': '****'        
      }
    ];

    $scope.thing = {
        'title': 'Protractor',
        'url': 'https://github.com/angular/protractor',
        'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
        'logo': 'protractor.png',
        'rank': 1,
        'stars': '****'      
    };
    angular.forEach($scope.things, function(thing) {
      thing.rank = Math.random().toFixed(2);;
    });

    $scope.noStyles = function () {
      document.styleSheets[0].disabled = true;
      document.styleSheets[1].disabled = true;
      document.styleSheets[2].disabled = true;
      document.styleSheets[3].disabled = true;
      console.log('1',document.styleSheets[1]);
      console.log('2',document.styleSheets[2]);
    }

    $scope.reStyle = function (n)  {
      $scope.noStyles()
      document.styleSheets[n].disabled = false;
      return true;
    }

    $scope.closeBlackdiv = function() {
      var blackdiv, stylediv;
      blackdiv = document.getElementById("blackdiv")
      blackdiv.parentNode.removeChild(blackdiv);
      stylediv = document.getElementById("stylediv")
      stylediv.parentNode.removeChild(stylediv);
    }

    $scope.showStyle = function(n) {
      var div, text, blackdiv;
      blackdiv = document.createElement("DIV");
      blackdiv.setAttribute(
        "style",
        "background-color:#000000;position:absolute;width:100%;height:100%;top:0;opacity:0.5;margin-left:-20px;");
      blackdiv.setAttribute(
        "id",
        "blackdiv");
      blackdiv.setAttribute(
        "onclick",
        "closeBlackdiv()");
      document.body.appendChild(blackdiv);
      div = document.createElement("DIV");
      div.setAttribute(
        "id",
        "stylediv");
      div.setAttribute(
        "style",
        "background-color:#ffffff;padding-left:5px;position:absolute;width:auto;height:auto;top:100px;bottom:50px;left:200px;right:200px;overflow:auto;font-family: monospace; white-space: pre;line-height:16px;");
      text = document.createTextNode(
        document.getElementsByTagName("STYLE")[n].innerHTML);
      div.appendChild(text);
      document.body.appendChild(div);
      }

}]);
