(function() {

  angular.module('planner').
    controller('MainController', function($scope, Topic, Day, Planner, Task, $timeout) {

    $scope.today = new Date()

    // retrieve initial data from API
    Day.getDays().success(function(data) { $scope.days = data })
    Topic.getTopics().success(function(data) { $scope.topics = data })

    Planner.get(1).then(function(planner) {
      $scope.planner = planner
      $scope.tasks = $scope.planner.tasks
      window.planner = $scope.planner
    })

    $scope.saveTasks = function() {
      $scope.saving = true
      $scope.planner.update().then(function() {
        $timeout(function() { $scope.saving = false }, 500)
      })
    }

    $scope.taskForm = Task.defaultTask

    $scope.editTask = function(task) {
      $scope.taskForm = task
    }

  })

})();
