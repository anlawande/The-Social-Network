var snApp = angular.module("snApp", ["ngRoute"]);

snApp.config(function ($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl: 'public/partials/main.html'
        })
    
        .otherwise({
            redirectTo: '/'
        })
});