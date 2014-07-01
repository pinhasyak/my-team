angular.module('TeamsCtrl', []).controller('TeamsController', function ($scope, $http, $location, Teams, Users, Identity, Notifier, Auth) {

    $scope.tagline = 'Nothing beats a pocket protector!';
    $scope.serverMessage = {};
    $scope.userSignIn = {};
    $scope.user = {};
    $scope.identity = Identity;

    $scope.login = function () {
        Auth.authenticateUser($scope.userSignIn.email, $scope.userSignIn.password).then(function (success) {
            if (success) {
                Notifier.notify('You have successfully signed in!');
            }
            else {
                Notifier.notifyError('Username/Password combination incorrect');
            }
        })
    }
    $scope.logout = function () {
        Auth.logoutUser().then(function () {
            $scope.userSignIn = {};
            Notifier.notify('You have successfully sighed out!');
            $location.path('/');
        })
    }
    $scope.initUser = function () {
        Auth.getUser().then(function(){
            console.log("init user !!!!!");
        })
    }
    $scope.editUser = function () {
        $scope.loading = true;
        Users.create($scope.user)
            .success(function (data) {
                $scope.serverMessage = data;
                Notifier.notify('New user created !');
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
            Teams.create($scope.teamFormData)

                // if successful creation, call our get function to get all the new todos
                .success(function (data) {
                    $scope.loading = false;
                    $scope.teamFormData = {}; // clear the form so our user is ready to enter another
                });
        }
    };

});