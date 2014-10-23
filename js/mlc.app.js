'use strict';

define('mlcApp', [
    'angular',
    'angularRoute',
    'addExtra'
    ],
    function(angular) {
        return angular.module('mlcApp', ['ngRoute', 'addExtra']);
    }
);