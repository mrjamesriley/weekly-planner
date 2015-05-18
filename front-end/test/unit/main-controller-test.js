describe('main controller', function() {
  beforeEach(module('planner'));

  var $controller;

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
    $scope = {};
    mainController = $controller('MainController', { $scope: $scope });
  }));

  describe('$scope.defaultTask', function() {
    it('should set up a default task data for faster entry of new tasks', function() {
      expect($scope.taskForm.name).toBe('Snow Boarding');
    });
  });


  describe('$scope.today', function() {
    it('should set today to the current date', function() {
      var currentDate = (new Date()).getDate();
      expect($scope.today.getDate()).toBe(currentDate);
    });
  });

});
