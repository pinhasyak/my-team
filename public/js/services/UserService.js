/**
 * Created by pi on 6/18/14.
 */
angular.module('UserService', [])

    // super simple service
    // each function returns a promise object
    .factory('Users', function($http) {
        return {
            get : function() {
                return $http.get('/api/users');
            },
            create : function(user) {
                return $http.post('/api/users', user);
            },
            delete : function(id) {
                return $http.delete('/api/users/' + id);
            }
        }
    });