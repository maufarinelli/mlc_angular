'use strict';

define(
    [
        'angular',
        'mlcApp',
        'controllers/lottery649.controller',
        'controllers/quebec49.controller'
    ],
    function(angular, mlcApp) {

        return mlcApp.config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/lottery649', {
                templateUrl: 'templates/base.html',
                controller: 'Lottery649Controller'
            });
            $routeProvider.when('/quebec49', {
                templateUrl: 'templates/base.html',
                controller: 'Quebec49Controller'
            });
            $routeProvider.otherwise({
                redirectTo: '/lottery649'
            });
        }]);

    }
);