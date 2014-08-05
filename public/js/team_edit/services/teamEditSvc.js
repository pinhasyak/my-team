/**
 * Created by pi on 6/6/14.
 */
angular.module('teamEdit')
    .factory('teamEditSvc', function($http) {
        return {
            get : function() {
                return $http.get('/api/teams');
            },
            create : function(team) {
                return $http.post('/api/teams', team);
            },
            delete : function(id) {
                return $http.delete('/api/teams/' + id);
            }
        }
    });