/**
 * Created by pi on 8/11/14.
 */
angular.module('teams').controller('showTeamsCtrl', function($scope, cashedShowTeamsSvc){
    $scope.teams = cashedShowTeamsSvc.query();
    $scope.sortOptions = [{value:"name",text:"Name"},{value:"technology",text:"Technology"},{value:"company",text:"Company"}];
    $scope.sortOrder = $scope.sortOptions[1].value;
    $scope.test = "My test";
})
