snApp.controller("landingCtrl", ["$scope", "userService", "$location", function($scope, userService, $location){
    $scope.userFrm = {};
    $scope.userFrm.firstname = "";
    $scope.userFrm.lastname = "";
    
    $scope.signInUser = function() {
        userService.signInUser($scope.userFrm.firstname, $scope.userFrm.lastname)
            .then(function (resp) {
                $scope.user.userId = resp.data.userId;
                $location.path("/profile");
        });
    };
}]);