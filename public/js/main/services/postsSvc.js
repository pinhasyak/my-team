/**
 * Created by pi on 8/19/14.
 */

angular.module('myTeamApp')
    .factory('postsSvc',function($http) {
        return {
            getPosts : function() {
                return $http.get('/api/posts');
            }
        }
    });