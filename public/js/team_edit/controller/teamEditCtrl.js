angular.module('teamEdit').controller('teamEditCtrl', function ($scope, $http, $location, teamEditSvc,userEditSvc,notifierService) {

    $scope.tagline = 'Nothing beats a pocket protector!';
    $scope.serverMessage = {};

    $scope.editUser = function () {
        $scope.loading = true;
        userEditSvc.create($scope.user)
            .success(function (data) {
                $scope.serverMessage = data;
                notifierService.notify('New user created !');
                console.log($scope.serverMessage.name + " " + $scope.serverMessage.message);
            })
        ;
    }

    // CREATE ==================================================================
    // when submitting the add form, send the text to the node API
    $scope.createTeam = function () {
        $scope.loading = true;

        // validate the formData to make sure that something is there
        // if form is empty, nothing will happen
        if ($scope.teamFormData.name != undefined) {
            console.log($scope.teamFormData.name)
            // call the create function from our service (returns a promise object)
            teamEditSvc.create($scope.teamFormData)

                // if successful creation, call our get function to get all the new todos
                .success(function (data) {
                    $scope.loading = false;
                    $scope.teamFormData = {}; // clear the form so our user is ready to enter another
                });
        }
    };

});