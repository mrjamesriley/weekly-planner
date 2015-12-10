(function() {

  angular.module('planner').
  directive('lpTopic', function() {
    return {
      scope: {
        topic: '=',
        onToggle: '&'
      },
      restrict: 'E',
      replace: true,
      templateUrl: 'templates/topic.html'
    }
  })

}());
