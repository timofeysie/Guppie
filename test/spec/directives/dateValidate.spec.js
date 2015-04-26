'use strict';
describe('dateValidate', function() {
  var form, $scope;
  beforeEach(module('gulpAngular'));
  beforeEach(inject(function($compile, $rootScope) {
    $scope = $rootScope;
    var element = angular.element('<form name="form"> '+
      '<input id="birthday_id"'+
      'type="date" '+
      'name="birthday"'+
      'ng-model="user.birthday"'+
      'date-validate/></form>');
    $scope.user = {birthday: null}
    $compile(element)($scope);
    form = $scope.form;
  }));

  describe('date', function () {
    it('should validate YYYY-MM-DD', function() {
      form.birthday.$setViewValue('2015-04-11');
      $scope.$digest();
      expect(form.birthday.$valid).toBe(true);
    });
    it('should validate DD-MM-YYYY', function() {
      form.birthday.$setViewValue('04-11-2015');
      $scope.$digest();
      expect(form.birthday.$valid).toBe(true);
    });
    it('should validate D-MM-YYYY', function() {
      form.birthday.$setViewValue('4-11-2015');
      $scope.$digest();
      expect(form.birthday.$valid).toBe(true);
    });
    it('should not validate MM-DD', function() {
      form.birthday.$setViewValue('31-12');
      $scope.$digest();
      expect(form.birthday.$valid).toBe(false);
    });
    it('should validate DD/MM/YYYY', function() {
      form.birthday.$setViewValue('13/04/2015');
      $scope.$digest();
      expect(form.birthday.$valid).toBe(true);
    });
    it('should validate YYYY/MM/DD', function() {
      form.birthday.$setViewValue('2015/04/13');
      $scope.$digest();
      expect(form.birthday.$valid).toBe(true);
    });
  });
});