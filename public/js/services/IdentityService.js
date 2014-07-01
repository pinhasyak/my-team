/**
 * Created by pi on 6/20/14.
 */
angular.module('IdentityService',[]).factory('Identity',function(){
    return{
        currentUser: undefined,
        isAuthenticated: function(){
            return !!this.currentUser;
        },
        isAuthorized: function(role){
            return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1
        }
    }
})
