(function() {

  angular.module('planner').
    controller('AddTaskController', ['$scope', function($scope) {

    $scope.addTask = function() {
      $scope.tasks.push($scope.taskForm)
      $scope.taskForm = $scope.defaultTask
    }

    $scope.switchToAdd = function() {
      $scope.taskForm = $scope.defaultTask
    }

  }])

})();

