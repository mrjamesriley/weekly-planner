(function() {

  angular.module('planner').
    factory('Topic', function($http, baseResourceURL) {

    var topicsURL = baseResourceURL + 'topics'

    return {
      getTopics: function() {
        return $http({ url: topicsURL })
      }
    }

  })

}());
