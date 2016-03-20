snApp.controller("profileCtrl", ["$scope", "userService", function ($scope, userService) {
    $scope.user.profileImg = "public/img/man.jpg";
    $scope.user.whatIDo = "Student, Web Developer, Software Engineering, Marathon runner";
    $scope.user.whatILike = "Running, Trance, Gaming and a close knit circle of friends";
    
    $scope.editing = false;
    $scope.isLoading = true;
    
    $scope.edit = function () {
        if (!$scope.editing)
            $scope.editing = true;
        else {
            var reqObj = $scope.user;
            userService.setProfileUser(reqObj).then(function (resp) {
                console.log(resp.data.opCode);
            });
            
            $scope.editing = false;
        }
    }
    
    userService.getProfileUser($scope.user.userId).then(function (resp) {
        var data = resp.data;
        
        $scope.user.whatIDo = data.whatIDo;
        $scope.user.whatILike = data.whatILike;
        $scope.user.headline = data.headline;
        $scope.user.firstname = data.firstname;
        $scope.user.lastname = data.lastname;
        $scope.user.name = $scope.user.firstname + " " + $scope.user.lastname;
        
        $scope.isLoading = false;
    });
}]);