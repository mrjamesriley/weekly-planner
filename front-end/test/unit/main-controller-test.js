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
      expect($scope.defaultTask.name).toBe('Yodelling');
    });
  });

  describe('$scope.deleteTask', function() {
    it('should set the task as marked for deletion if it exists for only one day', function() {
      var task = { name: 'Singing', daysIds: [2] };
      var day  = { id: 2 };
      $scope.deleteTask(task, day);
      expect(task._destroy).toBe(1);
    });

    it ('should remove the unset the given day for the task', function() {
      var task = { name: 'Eating', daysIds: [1,2] };
      var day  = { id: 2 };
      $scope.deleteTask(task, day);
      expect(_.isEqual(task.daysIds, [1])).toBeTruthy();
    });
  });

  describe('$scope.today', function() {
    it('should set today to the current date', function() {
      var currentDate = (new Date()).getDate();
      expect($scope.today.getDate()).toBe(currentDate);
    });
  });

});
