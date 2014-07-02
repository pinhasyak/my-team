'use strict';

angular.module('myTeamApp', ['ngRoute', 'ngResource','TeamsCtrl','MainCtrl', 'ChatCtrl', 'AdminUsersCtrl', 'TeamsService', 'UserService', 'IdentityService', 'NotifierService', 'AuthService', 'LoggedUserService']);

var routRoleCheck = {
    team_leader:{auth: function (Auth) {
        return Auth.authorizeCurrentUserForRoute('team_leader');
    }}
}

angular.module('myTeamApp').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            // home page
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'MainController'
            })
            .when('/sighup',{
                templateUrl: 'views/teams.html',
                controller: 'TeamsController'
            })
            .when('/teams', {
                templateUrl: 'views/teams.html',
                controller: 'TeamsController'
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