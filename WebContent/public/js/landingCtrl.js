snApp.controller("landingCtrl", ["$scope", "userService", function($scope, userService){
    $scope.userFrm = {};
    $scope.userFrm.firstname = "";
    $scope.userFrm.lastname = "";
    
    $scope.signInUser = function() {
        userService.signInUser($scope.userFrm.firstname, $scope.userFrm.lastname)
            .then(function (data) {
                console.log(data);
        });
    };
}]);