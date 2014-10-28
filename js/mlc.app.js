'use strict';

define('mlcApp',
    [
        'angular',
        'angularRoute',
        'addExtra',
        'addGuaranteed',
        'addNumbers',
        'billboard',
        'extra',
        'guaranteed',
        'lastdraw',
        'myNumbers'
    ],
    function(angular) {
        return angular.module('mlcApp', [
            'ngRoute',
            'addExtra',
            'addGuaranteed',
            'addNumbers',
            'billboard',
            'extra',
            'guaranteed',
            'lastdraw',
            'myNumbers'
        ]);
    }
);