(function() {

  var app = angular.module('planner');

  app.constant('baseResourceURL', 'http://localhost:3000/');

  app.factory('Task', function(railsResourceFactory, baseResourceURL) {
    var taskResource = railsResourceFactory({
      url: baseResourceURL + 'tasks',
      name: 'task'
    });

    taskResource.prototype.topic = function(topics) {
      var task = this;
      return _.find(topics, function(topic) { return topic.id === task.topicId; })
    }

    taskResource.prototype.deleteTask = function(day) {
      this.daysIds = _.without(this.daysIds, day.id);
      if(this.daysIds.length === 0) this._destroy = 1;
    }

    taskResource.prototype.cssClass = function(topics) {
      var topic = this.topic(topics);
      if(topic) return 'task--' + topic.name.toLowerCase();
    }

    taskResource.defaultTask = {
      name: 'Snow Boarding',
      startTime: '08:00:00',
      daysIds: [1],
      topicId: 1
    }

    return taskResource;
  });

  app.factory('Planner', function(railsResourceFactory, railsSerializer, baseResourceURL) {

    var plannerResource = railsResourceFactory({
      url: baseResourceURL + 'planners',
      name: 'planner',
      serializer: railsSerializer(function() {
        this.resource('tasks', 'Task');
      })
    });

    // retrieves all visible tasks for a given day
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

})();
