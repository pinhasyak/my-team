angular.module('MainCtrl', []).controller('MainController', function($scope,$http,Teams) {

	$scope.tagline = 'To the moon and back!';
    $scope.loading = true;
    // GET =====================================================================
    // when landing on the page, get all todos and show them
    // use the service to get all the todos
    Teams.get()
        .success(function(data) {
            $scope.teams = data;
            console.log(data);
            $scope.loading = false;
        });


});