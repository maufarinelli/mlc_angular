'use strict';

define('mlcApp', [
    'angular',
    'angularRoute',
    'addExtra',
    'addGuaranteed',
    'addNumbers'
    ],
    function(angular) {
        return angular.module('mlcApp', [
            'ngRoute',
            'addExtra',
            'addGuaranteed',
            'addNumbers'
        ]);
    }
);