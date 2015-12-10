(function() {

  var app = angular.module('planner')

  app.controller('MainController', function($scope, Topic, Day, Planner, Task, $timeout) {

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

  app.controller('TopicsPanelController', ['$scope', function($scope) {
    $scope.showAll = function() { _.each($scope.topics, function(topic) { topic.visible = true }) }
    $scope.showNone = function() { _.each($scope.topics, function(topic) { topic.visible = false }) }
    $scope.toggleTopic = function(topic, second) { topic.visible = !topic.visible }
  }])

  app.controller('AddTaskController', ['$scope', function($scope) {

    $scope.addTask = function() {
      $scope.tasks.push($scope.taskForm)
      $scope.taskForm = $scope.defaultTask
    }

    $scope.switchToAdd = function() {
      $scope.taskForm = $scope.defaultTask
    }

  }])

})();
