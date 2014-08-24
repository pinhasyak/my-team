angular.module('myTeamApp').controller('MainController', function($scope,postsSvc){

	$scope.tagline = 'To the moon and back!';
    $scope.loading = true;

    postsSvc.getPosts()
        .success(function(data) {
            $scope.teams = data;
            console.log(data);
            $scope.loading = false;
        });

});