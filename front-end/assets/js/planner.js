(function() {

  // define the module for our application, bringing in our module dependencies
  var app = angular.module('planner', ['rails', 'checklist-model'])
  app.constant('baseResourceURL', 'http://localhost:3000/')

})();
