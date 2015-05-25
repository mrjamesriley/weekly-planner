var PlannerPage = require('./page-object.js');

describe('Task management', function() {

  var page;

  beforeEach(function() {
    page = new PlannerPage();
  });

  describe('Adding a new task', function() {

    it('should add a new task to the planner table', function() {
      page.setTaskFormName('Drink Coffee');
      page.submitTaskForm();
      expect(page.tasksByName('Drink Coffee').count()).toEqual(1);
    });

  });

  describe('Editing a task', function() {

    beforeEach(function() {
      page.firstTask.click();
    });

    it('should load a task into the Task Form when clicked on', function() {
      var taskName = page.firstTask.element(by.binding('task.name')).getText();
      expect(page.taskFormName.getAttribute('value')).toMatch(taskName);
    });

    it('should update the task when modifying within the form', function() {
      page.setTaskFormName('Kayaking');
      expect(page.getNameForTask(page.firstTask)).toMatch('Kayaking');
    });
  });

  describe('Deleting a task', function() {

    it('should remove the task from the planner for that day', function() {
      var gymTasks = page.tasksByTopic('gym');
      expect(gymTasks.count()).toBe(2);

      gymTasks.first().element(by.css('.task__trash')).click();
      expect(gymTasks.count()).toBe(1);
    });

  });

});
