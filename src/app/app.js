var app = angular.module('ThurealApp', ['ngRoute']);
app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/views/home/index.html',
            controller: 'HomeIndexCtrl'
        })
        .otherwise({
            templateUrl: 'app/views/404.html',
        });
    $locationProvider.html5Mode({
        enabled: true
    });
}]);