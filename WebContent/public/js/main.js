var snApp = angular.module("snApp", ["ngRoute"]);

snApp.config(["$routeProvider", function ($routeProvider){
    $routeProvider
        .when("/landing", {
            templateUrl: 'public/partials/landing.html',
            controller: 'landingCtrl'
        })
    
        .when("/profile", {
            templateUrl: 'public/partials/profile.html',
            controller: 'profileCtrl'
        })
    
        .otherwise({
            redirectTo: '/'
        })
}]);