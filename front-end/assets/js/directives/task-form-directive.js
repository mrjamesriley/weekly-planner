(function() {

  angular.module('planner').
  directive('lpTaskForm', function() {
    return {
      scope: {
        taskForm: '=',
        topics: '=',
        days: '=',
        onAdd: '&'
      },
      restrict: 'E',
      replace: false,
      templateUrl: 'templates/add-task-form.html'
    }
  })

}());
