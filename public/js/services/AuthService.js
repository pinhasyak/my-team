/**
 * Created by pi on 6/21/14.
 */
angular.module('AuthService',[]).factory('Auth',function($http,$q,$location,Identity,LoggedUser){
    return{
        getUser: function() {
            var dfd = $q.defer();
            $http.get('/api/current_user').then(function(response){
                var user = new LoggedUser();
                angular.extend(user,response.data);
                if(response.data != ''){
                    Identity.currentUser = user;
                }
                dfd.resolve();
            });
            return dfd.promise;
        },
        authenticateUser:function(username,password){
            var dfd = $q.defer();
            $http.post('/api/login',{username:username,password:password}).then(function(response){
                if (response.data.success){
                    var user = new LoggedUser();
                    angular.extend(user,response.data.user);
                    Identity.currentUser = user;
                    dfd.resolve(true);
                }else{
                    dfd.resolve(false);
                }

            })
            return dfd.promise;
        },
        logoutUser:function(){
            var dfd = $q.defer()
            $http.post('api/logout',{logout:true}).then(function(){
                Identity.currentUser = undefined;
                dfd.resolve();
          })
            return dfd.promise;
        },
        authorizeCurrentUserForRoute : function(role){
            if (Identity.isAuthorized(role)) {
                return true;
            } else {
                $q.reject('not authorized');
                $location.path('/');
            }
        }
    }
});