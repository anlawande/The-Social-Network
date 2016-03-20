snApp.controller("mainCtrl", ["$scope", "userService", function($scope, userService){
    $scope.user = {};
    $scope.user.firstname = "";
    $scope.user.lastname = "";
    
    userService.getCurrentUser().then(function (resp) {
        $scope.user.userId = resp.data.userId;
    });
    
    $scope.signInUser = function() {
        userService.signInUser($scope.user.firstname, $scope.user.lastname)
            .then(function (data) {
                console.log(data);
        });
    };
}]);