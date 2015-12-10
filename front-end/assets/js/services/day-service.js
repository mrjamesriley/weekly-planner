(function() {

  angular.module('planner').
    factory('Day', function($http, baseResourceURL) {

    var daysURL = baseResourceURL + 'days'

    return {
      getDays: function() {
        return $http({ url: daysURL })
      }
    }

  })


}());
