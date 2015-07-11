'use strict';
describe('linkDirective', function() {
  var element, $compile, $rootScope;
  beforeEach(module('gulpAngular'));
  beforeEach(inject(function(_$compile_, _$rootScope_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));
  it('Replaces the element with the appropriate content', 
    function() {
      var template ='<link-directive></link-directive> ';
      element = $compile(template)($rootScope);
      $rootScope.$digest();
      expect(element.html()).toContain('Search');
    });
});