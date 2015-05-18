describe('Task Resource', function() {
  beforeEach(module('planner'));

  var TaskResource;

  beforeEach(inject(function($injector) {
    TaskResource = $injector.get('Task');
  }));

  describe('deleteTask', function() {
    it('should set the task as marked for deletion if it exists for only one day', function() {
      var singingTask = new TaskResource({ name: 'Singing', daysIds: [2] });
      var day  = { id: 2 };
      singingTask.deleteTask(day);
      expect(singingTask._destroy).toBe(1);
    });

    it ('should remove the unset the given day for the task', function() {
      var singingTask = new TaskResource({ name: 'Singing', daysIds: [1,2] });
      var day  = { id: 2 };
      singingTask.deleteTask(day);
      expect(_.isEqual(singingTask.daysIds, [1])).toBeTruthy();
    });
  });
});
