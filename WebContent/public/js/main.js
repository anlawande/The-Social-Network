var snApp = angular.module("snApp", ["ngRoute"]);

snApp.config(["$routeProvider", function ($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl: 'public/partials/main.html',
            controller: 'mainCtrl'
        })
    
        .otherwise({
            redirectTo: '/'
        })
}]);