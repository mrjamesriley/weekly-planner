app.constant('baseResourceURL', 'http://localhost:3000/');

app.factory('Planner', function(railsResourceFactory, baseResourceURL) {

  var plannerResource = railsResourceFactory({
    url: baseResourceURL + 'planners',
    name: 'planner'
  });

  plannerResource.prototype.visibleTasks = function(topics) {
    return _.select(this.tasks, function(task) {
      var tasksTopic = _.find(topics, function(topic) { return topic.id == task.topicId });
      return !task._destroy && tasksTopic.visible;
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
