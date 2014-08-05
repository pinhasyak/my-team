'use strict';

angular.module('access').factory('authSvc',function($http,$q,$location,currentUserSvc,loggedUserSvc){
    return{
        getUser: function() {
            var dfd = $q.defer();
            $http.get('/api/current_user').then(function(response){
                var user = new loggedUserSvc();
                angular.extend(user,response.data);
                if(response.data != ''){
                    currentUserSvc.currentUser = user;
                }
                dfd.resolve();
            });
            return dfd.promise;
        },
        authenticateUser:function(username,password){
            var dfd = $q.defer();
            $http.post('/api/login',{username:username,password:password}).then(function(response){
                if (response.data.success){
                    var user = new loggedUserSvc();
                    angular.extend(user,response.data.user);
                    currentUserSvc.currentUser = user;
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
                currentUserSvc.currentUser = undefined;
                dfd.resolve();
            })
            return dfd.promise;
        },
        authorizeCurrentUserForRoute : function(role){
            if (currentUserSvc.isAuthorized(role)) {
                return true;
            } else {
                $q.reject('not authorized');
                $location.path('/');
            }
        }
    }
})