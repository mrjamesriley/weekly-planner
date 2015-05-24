describe('Task management', function() {

  beforeEach(function() {
    browser.get('http://localhost:8282');
  });

  describe('Editing a task', function() {

    it('should load a task into the Task Form when clicked on', function() {
      var task = element.all(by.css('.planner-table .task')).first();
      var taskName = task.element(by.css('.task__name')).getText();
      var formName = element(by.css('.task-form__name'));
      task.click();

      expect(formName.getAttribute('value')).toMatch(taskName);
    });

    it('should update the task when modifying within the form', function() {
      var task = element.all(by.css('.planner-table .task')).first();
      var formName = element(by.css('.task-form__name'));
      task.click();

      formName.clear();
      formName.sendKeys('Kayaking');

      expect(task.element(by.css('.task__name')).getText()).toMatch('Kayaking');
    });
  });

});
