'use strict';

define([
        'addGuaranteed',
        'Add_Guaranteed/addguaranteed.controller'
    ],
    function(
        addGuaranteed
        ) {
        return addGuaranteed.directive('addGuaranteedDirective', function() {
            return {
                restrict: 'EA',
                templateUrl: 'js/Add_Guaranteed/add_guaranteed.html',
                controller: 'AddGuaranteedController'
            }
        });
    }
);