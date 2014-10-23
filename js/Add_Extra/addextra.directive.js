'use strict';

define([
    'addExtra',
    'Add_Extra/addextra.controller'
    ],
    function(
        addExtra
    ) {
        return addExtra.directive('addExtraDirective', function() {
            return {
                restrict: 'EA',
                templateUrl: 'js/Add_Extra/add_extra.html',
                controller: 'AddExtraController'
            }
        });
    }
);