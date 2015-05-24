(function() {

  var app = angular.module('planner');

  app.directive('lpTask', function() {
    return {
      scope: {
        task: '=',
        topics: '=',
        onEdit: '='
      },
      restrict: 'E',
      replace: true,
      templateUrl: 'templates/task.html'
    }
  });


  app.directive('lpTopic', function() {
    return {
      scope: {
        topic: '=',
        onToggle: '='
      },
      restrict: 'E',
      replace: true,
      templateUrl: 'templates/topic.html',
    }
  });

  app.directive('lpTaskForm', function() {
    return {
      scope: {
        taskForm: '='
      },
      restrict: 'E',
      replace: false,
      templateUrl: 'templates/add-task-form.html'
    }
  });

})();
