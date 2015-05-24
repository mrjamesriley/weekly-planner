describe('Planner handling', function() {

  beforeEach(function() {
    browser.get('http://localhost:8282');
  });

  describe('Loading of Planner page', function() {
    it('should load with the correct page title', function() {
      expect(browser.getTitle()).toEqual('Weekly Planner');
    });
  });

  describe('Toggling topic visibility', function() {
    it('should hide all tasks for that topic on first click', function() {
      var tasksSelector, topicsTasks, firstTopic;
      firstTopic = element(by.binding('topic.name'));

      firstTopic.getText().then(function(text) {
        tasksSelector = '.planner-table .task--' + text.toLowerCase();
        topicsTasks = element.all(by.css(tasksSelector));

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
