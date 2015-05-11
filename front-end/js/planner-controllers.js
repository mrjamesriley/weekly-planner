app.controller('MainController', function($scope, Topic, Day, Planner) {

  // retrieve initial data from API
  Day.getDays().success(function(data) { $scope.days = data });
  Topic.getTopics().success(function(data) { $scope.topics = data });

  Planner.get(1).then(function(data) {
    $scope.planner = data.planner;
    $scope.tasks = $scope.planner.tasks;
  });

  $scope.topicForTask = function(task) {
    return _.find($scope.topics, function(topic) { return topic.id == task.topic_id; })
  }

  $scope.tasksForDay = function(day) {
    return _.select($scope.tasks, function(task) { return _.contains(task.days_ids, day.id); });
  }

  $scope.taskCSSClass = function(task) {
    return 'task--' + $scope.topicForTask(task).name.toLowerCase();
  }

  $scope.showTask = function(task) {
    return $scope.topicForTask(task).visible;
  }

  $scope.saveTasks = function() {
    console.log('hit the save tasks button');
  }

});

app.controller('TopicsPanelController', ['$scope', function($scope) {
  $scope.showAll = function() { _.each($scope.topics, function(task) { task.visible = true }); }
  $scope.showNone = function() { _.each($scope.topics, function(task) { task.visible = false }); }
  $scope.toggleTopic = function(topic) { topic.visible = !topic.visible; }
}]);


app.controller('AddTaskController', ['$scope', function($scope) {

  $scope.addTask = function() {

    var topic = _.find($scope.topics, function(topic) { return topic.name == $scope.taskTopic.name });
    var day   = _.find($scope.days, function(day) { return day.name == $scope.taskDay.name });
    $scope.tasks.push({
      name: $scope.taskName,
      topic: topic.id,
      days_ids: [day.id]
    });

    $scope.taskName  = '';
    $scope.taskTopic = '';
  }

}]);
