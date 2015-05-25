var PlannerPage = require('./page-object.js');

describe('Planner handling', function() {

  var page;

  beforeEach(function() {
    page = new PlannerPage();
  });

  describe('Loading of Planner page', function() {
    it('should load with the correct page title', function() {
      expect(browser.getTitle()).toEqual('Weekly Planner');
    });
  });

  describe('Toggling topic visibility', function() {
    it('should hide all tasks for that topic on first click', function() {
      var tasksSelector, topicsTasks, firstTopic;
      firstTopic = page.topics.first();

      firstTopic.getText().then(function(topicName) {
        topicsTasks = page.tasksByTopic(topicName);

        // first click should hide the topics tasks
        firstTopic.click();
        expect(topicsTasks.count()).toEqual(0);

        // first click should restore the topcs tasks
        firstTopic.click();
        expect(topicsTasks.count()).toBeGreaterThan(0);
      });
    });

  });

});
