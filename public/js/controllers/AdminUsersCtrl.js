/**
 * Created by pi on 6/29/14.
 */
angular.module('AdminUsersCtrl',[]).controller('AdminUsersController',function($scope,LoggedUser){
$scope.users = LoggedUser.query();
})