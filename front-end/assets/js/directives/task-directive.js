(function() {

  angular.module('planner').
    directive('lpTask', function() {
    return {
      scope: {
        task: '=',
        topics: '=',
        day: '=',
        onEdit: '&'
      },
      restrict: 'E',
      replace: true,
      templateUrl: 'templates/task.html'
    }
  })

}());
