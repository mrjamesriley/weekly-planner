(function() {

  angular.module('planner').
    controller('TopicsPanelController', ['$scope', function($scope) {
    $scope.showAll = function() { _.each($scope.topics, function(topic) { topic.visible = true }) }
    $scope.showNone = function() { _.each($scope.topics, function(topic) { topic.visible = false }) }
    $scope.toggleTopic = function(topic, second) { topic.visible = !topic.visible }
  }])

}());
