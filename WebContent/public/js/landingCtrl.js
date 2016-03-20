snApp.controller("landingCtrl", ["$scope", "userService", function($scope, userService){
    $scope.userFrm = {};
    $scope.userFrm.firstname = "";
    $scope.userFrm.lastname = "";
    
    $scope.signInUser = function() {
        userService.signInUser($scope.userFrm.firstname, $scope.userFrm.lastname)
            .then(function (resp) {
                $scope.user.userId = resp.data.userId;
                console.log($scope.user.userId);
        });
    };
}]);