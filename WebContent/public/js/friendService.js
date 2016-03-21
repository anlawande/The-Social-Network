snApp.factory("friendService", ["$http", function ($http) {
    var serviceObj = {};
    
    serviceObj.getDummyFriends = function () {
        return $http.get("public/dummy/friends.json");
    }
    
    return serviceObj;
}]);