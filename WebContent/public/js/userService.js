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
    
    return serviceObj;
}]);