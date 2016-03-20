snApp.controller("profileCtrl", ["$scope", function ($scope) {
    $scope.user.profileImg = "public/img/man.jpg";
    $scope.user.whatIDo = "Student, Web Developer, Software Engineering, Marathon runner";
    $scope.user.whatILike = "Running, Trance, Gaming and a close knit circle of friends";
    
    $scope.editing = false;
    
    $scope.edit = function () {
        if (!$scope.editing)
            $scope.editing = true;
        else
            $scope.editing = false;
    }
}]);