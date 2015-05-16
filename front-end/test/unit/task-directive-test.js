describe('task directive', function() {

  beforeEach(module('planner'));
  beforeEach(module('templates'));

  var $compile, $rootScope;

  beforeEach(inject(function(_$compile_, _$rootScope_) {
    $compile   = _$compile_;
    $rootScope = _$rootScope_;

    $rootScope.task = {
      name: 'Dancing',
      startTime: '2000-01-01T08:00:00Z'
    }

  }));


  describe('loading of task data in template', function() {
    it('should output the date in the short lowercased format', function() {
      var element = $compile('<lp-task></lp-task>')($rootScope);
      $rootScope.$digest();
      expect(element.html()).toContain('8:00 am');
    });
  });

});
