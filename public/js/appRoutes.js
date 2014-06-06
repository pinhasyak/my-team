angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/teams', {
			templateUrl: 'views/teams.html',
			controller: 'TeamsController'
		})

		.when('/geeks', {
			templateUrl: 'views/chat.html',
			controller: 'ChatController'
		});

	$locationProvider.html5Mode(true);

}]);