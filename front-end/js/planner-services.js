app.constant('baseResourceURL', 'http://localhost:4000/');

app.factory('Planner', function(railsResourceFactory, baseResourceURL) {
  return railsResourceFactory({
    url: baseResourceURL + 'planners',
    name: 'planner'
  });
});

app.factory('Day', function($http, baseResourceURL) {

  var daysURL = baseResourceURL + 'days';

  return {
    getDays: function() {
      return $http({ url: daysURL });
    }
  }

});


app.factory('Topic', function($http, baseResourceURL) {

  var topicsURL = baseResourceURL + 'topics';

  return {
    getTopics: function() {
      return $http({ url: topicsURL });
    }
  }

});
