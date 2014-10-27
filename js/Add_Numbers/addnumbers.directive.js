'use strict';

define([
        'addNumbers',
        'Add_Numbers/addnumbers.controller'
    ],
    function(
        addGuaranteed
        ) {
        return addGuaranteed.directive('addNumbersDirective', function() {
            return {
                restrict: 'EA',
                templateUrl: 'js/Add_Numbers/add_numbers.html',
                controller: 'AddNumbersController'
            }
        });
    }
);