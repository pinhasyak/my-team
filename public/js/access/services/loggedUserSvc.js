/**
 * Created by Pinhas on 7/21/2014.
 */
angular.module('access')
    .factory('loggedUserSvc',function($resource){
        var UserResource = $resource('/api/users/:id',{_id:"@id"});
        UserResource.prototype.isAdmin = function(){
            return this.roles && this.roles.indexOf("team_leader")>-1;
        }
        return UserResource;
    })
