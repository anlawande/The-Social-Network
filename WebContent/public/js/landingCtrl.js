snApp.controller("landingCtrl", ["$scope", "userService", "friendService", "$location", function($scope, userService, friendService, $location){
    $scope.userFrm = {};
    $scope.userFrm.firstname = "";
    $scope.userFrm.lastname = "";
    
    friendService.getDummyFriends().then(function(resp) {
        $scope.dummyFriends = resp.data;
    });
    
    $scope.signInUser = function() {
        userService.signInUser($scope.userFrm.firstname, $scope.userFrm.lastname)
            .then(function (resp) {
                $scope.user.userId = resp.data.userId;
                $location.path("/profile");
        });
    };
}]);