app.controller('MainController', function($scope, Topic, Day, Planner) {

  // retrieve initial data from API
  Day.getDays().success(function(data) { $scope.days = data });
  Topic.getTopics().success(function(data) { $scope.topics = data });

  Planner.get(1).then(function(planner) {
    $scope.planner = planner;
    $scope.tasks = $scope.planner.tasks;
    window.planner = $scope.planner;
  });

  $scope.topicForTask = function(task) {
    return _.find($scope.topics, function(topic) {
      return topic.id == task.topicId;
    })
  }

  $scope.taskCSSClass = function(task) {
    var topic = $scope.topicForTask(task)
    var CSSClass = topic ? topic.name.toLowerCase() : topic;
    return 'task--' + CSSClass;
  }

  $scope.saveTasks = function() {
    $scope.planner.update();
  }

  $scope.deleteTask = function(task) {
    task._destroy = 1;
  }

});

app.controller('TopicsPanelController', ['$scope', function($scope) {
  $scope.showAll = function() { _.each($scope.topics, function(topic) { topic.visible = true }); }
  $scope.showNone = function() { _.each($scope.topics, function(topic) { topic.visible = false }); }
  $scope.toggleTopic = function(topic) { topic.visible = !topic.visible; }
}]);


app.controller('AddTaskController', ['$scope', function($scope) {

  $scope.addTask = function() {

    var topic = _.find($scope.topics, function(topic) { return topic.name == $scope.taskTopic.name });
    var day   = _.find($scope.days, function(day) { return day.name == $scope.taskDay.name });

    $scope.tasks.push({
      name: $scope.taskName,
      topicId: topic.id,
      daysIds: [day.id]
    });

    $scope.taskName  = '';
    $scope.taskTopic = '';
  }

}]);
