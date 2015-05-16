var app = angular.module('planner');

app.directive('lpTask', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/task.html'
  }
});


app.directive('lpTopic', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/topic.html',
  }
});

app.directive('lpTaskForm', function() {
  return {
    restrict: 'E',
    replace: false,
    templateUrl: 'templates/add_task_form.html'
  }
});
