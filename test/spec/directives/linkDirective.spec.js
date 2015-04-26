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
    var template ='<a href="http://google.com">Click me to go to Google</a>';
    element = $compile(template)($rootScope);
    $rootScope.$digest();
    expect(element.html()).toContain('Click me to go to Google');
    });
});