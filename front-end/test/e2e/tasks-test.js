describe('Task management', function() {

  beforeEach(function() {
    browser.get('http://localhost:8282');
  });

  describe('Adding a new task', function() {

    it('should add a new task to the planner table', function() {
      var taskForm = element(by.tagName('lp-task-form'));
      taskForm.element(by.model('taskForm.name')).clear().sendKeys('Drink Coffee');
      taskForm.element(by.buttonText('Add Task')).click();

      var tasks = element.all(by.cssContainingText('.task__name', 'Drink Coffee'));
      expect(tasks.count()).toEqual(1);
    });

  });

  describe('Editing a task', function() {

    var task, formName;

    beforeEach(function() {
      task = element.all(by.css('.planner-table .task')).first();
      formName = element(by.css('.task-form__name'));
      task.click();
    });

    it('should load a task into the Task Form when clicked on', function() {
      var taskName = task.element(by.binding('task.name')).getText();
      expect(formName.getAttribute('value')).toMatch(taskName);
    });

    it('should update the task when modifying within the form', function() {
      formName.clear().sendKeys('Kayaking');
      expect(task.element(by.binding('task.name')).getText()).toMatch('Kayaking');
    });
  });


  describe('Deleting a task', function() {

    it('should remove the task from the planner for that day', function() {
      var gymTasks = element.all(by.css('.task--gym'));
      expect(gymTasks.count()).toBe(2);

      gymTasks.first().element(by.css('.task__trash')).click();
      expect(gymTasks.count()).toBe(1);
    });

  });

});
