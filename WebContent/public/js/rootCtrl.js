snApp.controller("rootCtrl", ["$scope", "userService", "$location", function ($scope, userService, $location) {
    $scope.user = {};
    $scope.isLoading = true;

    userService.getCurrentUser().then(function (resp) {
        if (resp.data.userId === "")
            $location.path("/landing");
        else {
            $scope.user.userId = resp.data.userId;
            $location.path("/profile");
        }
        $scope.isLoading = false;
    });
}]);