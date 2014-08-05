'use strict';

angular.module('myTeamApp', ['ngRoute', 'ngResource','common','access','teamEdit']);

var routRoleCheck = {
    team_leader:{auth: function (authSvc) {
        return authSvc.authorizeCurrentUserForRoute('team_leader');
    }}
}

angular.module('myTeamApp').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            // home page
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'MainController'
            })
            .when('/profile',{
                templateUrl: 'js/team_edit/views/teams.html',
                controller: 'teamEditCtrl'
            })
            .when('/teams', {
                templateUrl: 'js/team_edit/views/teams.html',
                controller: 'teamEditCtrl'
            })

            .when('/chat', {
                templateUrl: 'views/chat.html',
                controller: 'ChatController'
            })
            .when('/admin/users', {
                templateUrl: 'views/admin/users.html',
                controller: 'AdminUsersController',
                resolve: routRoleCheck.team_leader
            });
        ;

        $locationProvider.html5Mode(true);

    }]);

angular.module('myTeamApp').run(function ($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function (evt, current, previous, rejection) {
        if (rejection === 'not authorized') {
            $location.path('/');
        }
    })
});

