/**
 * Created by pi on 6/25/14.
 */

angular.module('LoggedUserService', [])
    .factory('LoggedUser',function($resource){
        var UserResource = $resource('/api/users/:id',{_id:"@id"});
        UserResource.prototype.isAdmin = function(){
            return this.roles && this.roles.indexOf("team_leader")>-1;
        }
        UserResource.prototype.ku = function(){
            return 'ku';
        }
        return UserResource;
    })

