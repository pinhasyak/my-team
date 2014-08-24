/**
 * Created by pi on 8/23/14.
 */
angular.module('teams').controller('showTeamDetailsCtrl',function($scope, showTeamsSvc,$routeParams,cashedShowTeamsSvc){
// not cashed
//    $scope.team = showTeamsSvc.get({_id:$routeParams.id});
    cashedShowTeamsSvc.query().$promise.then(function(collection) {
        collection.forEach(function(team) {
            if(team._id === $routeParams.id) {
                $scope.team = team;
            }
        })
    })

});