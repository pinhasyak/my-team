/**
 * Created by Pinhas on 7/20/2014.
 */
'use strict';

angular.module('access').controller('accessCtrl',function($scope,$location,authSvc,notifierService,currentUserSvc){
    $scope.tagline = 'Nothing beats a pocket protector!';
    $scope.serverMessage = {};
    $scope.userSignIn = {};
    $scope.user = {};
    $scope.identity = currentUserSvc;

    $scope.login = function () {
        authSvc.authenticateUser($scope.userSignIn.email.toLowerCase(), $scope.userSignIn.password).then(function (success) {
            if (success) {
                notifierService.notify('You have successfully signed in!');
            }
            else {
                notifierService.notifyError('Username/Password combination incorrect');
            }
        })
    }
    $scope.logout = function () {
        authSvc.logoutUser().then(function () {
            $scope.userSignIn = {};
            notifierService.notify('You have successfully sighed out!');
            $location.path('/');
        })
    }
    $scope.initUser = function () {
        authSvc.getUser().then(function(){
            console.log("init user !!!!!");
        })
    }
    $scope.editUser = function () {
        $scope.loading = true;
        authSvc.create($scope.user)
            .success(function (data) {
                $scope.serverMessage = data;
                notifierService.notify('New user created !');
                console.log($scope.serverMessage.name + " " + $scope.serverMessage.message);
            })
        ;
    }
});