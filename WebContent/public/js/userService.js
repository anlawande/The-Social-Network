snApp.factory("userService", ["$http", function($http) {
    var serviceObj = {};
    
    serviceObj.getCurrentUser = function () {
        return $http.get("api/user/current");
    }
    
    serviceObj.signInUser = function (firstname, lastname) {
        return $http.post("api/user/signIn", {
            "firstname": firstname,
            "lastname": lastname
        });
    }
    
    serviceObj.getProfileUser = function(userId) {
        return $http.get("api/user/profile", {
            params: {
                userId: userId
            }
        })
    }
    
    serviceObj.setProfileUser = function (userObj) {
        return $http.post("api/user/profile", userObj);
    }
    
    serviceObj.logout = function () {
        return $http.get("api/user/logout");
    }
    
    return serviceObj;
}]);