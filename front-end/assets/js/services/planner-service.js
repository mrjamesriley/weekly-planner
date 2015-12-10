(function() {

  angular.module('planner').factory('Planner', function(railsResourceFactory, railsSerializer, baseResourceURL) {

    var plannerResource = railsResourceFactory({
      url: baseResourceURL + 'planners',
      name: 'planner',
      serializer: railsSerializer(function() {
        this.resource('tasks', 'Task')
      })
    })

    // retrieves all visible tasks for a given day
    plannerResource.prototype.visibleTasksForDay = function(day, topics) {
      return _.select(this.tasks, function(task) {
        if(task._destroy || !_.contains(task.daysIds, day.id)) return false

        var topic = _.find(topics, function(topic) { return topic.id == task.topicId })
        return topic.visible
      })
    }

    return plannerResource

  })

}());
