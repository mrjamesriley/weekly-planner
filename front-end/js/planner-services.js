var app = angular.module('planner');

app.constant('baseResourceURL', 'http://localhost:3000/');

app.factory('Planner', function(railsResourceFactory, baseResourceURL) {

  var plannerResource = railsResourceFactory({
    url: baseResourceURL + 'planners',
    name: 'planner'
  });

  plannerResource.prototype.visibleTasksForDay = function(day, topics) {
    return _.select(this.tasks, function(task) {
      if(task._destroy || !_.contains(task.daysIds, day.id)) return false;

      var topic = _.find(topics, function(topic) { return topic.id == task.topicId });
      return topic.visible;
    });
  }

  return plannerResource;

});

app.factory('Day', function($http, baseResourceURL) {

  var daysURL = baseResourceURL + 'days';

  return {
    getDays: function() {
      return $http({ url: daysURL });
    }
  }

});


app.factory('Topic', function($http, baseResourceURL) {

  var topicsURL = baseResourceURL + 'topics';

  return {
    getTopics: function() {
      return $http({ url: topicsURL });
    }
  }

});
