/**
 * Created by pi on 6/29/14.
 */
angular.module('myTeamApp').controller('AdminUsersController',function($scope,loggedUserSvc){
$scope.users = loggedUserSvc.query();
})