// experimental: using Page Object pattern for cleaner tests
var PlannerPage = function() {
  browser.get('http://localhost:8282');
}

PlannerPage.prototype = {

  topics: element.all(by.binding('topic.name')),
  taskTrash: element(by.css('.task-trash')),
  taskForm:  element(by.tagName('lp-task-form')),
  taskFormName: element(by.model('taskForm.name')),
  firstTask: element.all(by.css('.planner-table .task')).first(),

  submitTaskForm: function() {
    element(by.buttonText('Add Task')).click();
  },
  tasksByName: function(taskName) {
    return element.all(by.cssContainingText('.task__name', taskName));
  },
  tasksByTopic: function(topic) {
    return element.all(by.css('.task--' + topic.toLowerCase()));
  },
  getNameForTask: function(task) {
    return task.element(by.binding('task.name')).getText();
  },
  setTaskFormName: function(name) {
    this.taskFormName.clear().sendKeys(name);
  }
}

module.exports = PlannerPage;
