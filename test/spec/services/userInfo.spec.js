'use strict';
describe('userInfo', function() {
  var $scope;
  beforeEach(module("gulpAngular"));
  beforeEach(inject(
      function($rootScope, userInfo) {
        $scope = $rootScope.$new();
      }
    )
  );
  it('should set the role', function() {
    $scope.userInfo.setRole('Member');
    var result = $scope.userInfo.getRole();
    expect(result).toBe("Member");
  });

});