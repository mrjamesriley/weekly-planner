(function() {

  angular.module('planner').
    factory('Task', function(railsResourceFactory, baseResourceURL) {

      var taskResource = railsResourceFactory({
        url: baseResourceURL + 'tasks',
        name: 'task'
      })

      taskResource.prototype.topic = function(topics) {
        var task = this
        return _.find(topics, function(topic) { return topic.id === task.topicId })
      }

      taskResource.prototype.deleteTask = function(day) {
        this.daysIds = _.without(this.daysIds, day.id)
        if(this.daysIds.length === 0) this._destroy = 1
      }

      taskResource.prototype.cssClass = function(topics) {
        var topic = this.topic(topics)
        if(topic) return 'task--' + topic.name.toLowerCase()
      }

      taskResource.defaultTask = {
        name: '',
        startTime: '',
        daysIds: [1],
        topicId: 1
      }

      return taskResource
    })

}());
