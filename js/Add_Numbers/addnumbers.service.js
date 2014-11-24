'use strict';

define([
        'addNumbers'
    ],
    function(addNumbers) {
        addNumbers.service('addNumbersServices', function() {
            var that = this;

            /**
             * DIRECTIVE
             * Resets all choose numbers buttons
             */
            this.resetChooseNumbersButtons = function() {
                $('.btn-choose-numbers').each(function(index, button) {
                    that.resetAChooseNumberButton(button);
                });
            };

            /**
             * DIRECTIVE
             * Resets a choose numbers button
             */
            this.resetAChooseNumberButton = function(button) {
                angular.element(button).data('button-selected', false);
                angular.element(button).removeClass('btn-success').addClass('btn-default');
            };

            /**
             * Checks if selected numbers exceeded maximum of 6
             */
            this.checkSelectedNumbersExceeded = function(buttonsSelected) {
                var check = false;
                if(buttonsSelected.length > 6) {
                    check = true;
                }
                return check;
            };

            /**
             * Checks if user has selected exactly 6 numbers
             */
            this.checkSelectedExactly6Numbers = function(buttonsSelected) {
                var check = true;
                if(buttonsSelected.length !== 6) {
                    check = false;
                }
                return check;
            };
        });
    }
);