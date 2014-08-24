/**
 * Created by pi on 6/29/14.
 */
//angular.module('admin').controller('adminCtrl',function($scope,loggedUserSvc){
//$scope.users = loggedUserSvc.query();
//})

angular.module('myTeamApp').controller('adminCtrl',function($scope,loggedUserSvc){
    $scope.users = loggedUserSvc.query();
})