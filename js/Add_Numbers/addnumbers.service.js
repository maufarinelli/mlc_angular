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

            /**
             * Constructor for all choose numbers buttons
             * @return Array containing all buttons' objects
             */
            this.buttonsChooseNumbersConstructor = function() {
                var buttonsChooseNumbers = [];

                for(var i = 1; i < 50; i++) {
                    var button = {};
                    button.text = i < 10 ? '0' + i : i;
                    button.value = i;
                    buttonsChooseNumbers.push(button);
                }

                return buttonsChooseNumbers;
            };

            /**
             * Remove a button from the buttonSelectedModel Array
             * @param buttonSelectedModel - the buttonSelectedModel Array
             * @param buttonValue - the button value of the button to be removed
             */
            this.removeButtonFromModel = function(buttonSelectedModel, buttonValue) {
                _.remove(buttonSelectedModel, function(num){
                    return num === parseInt(buttonValue, 10);
                });
            };

            /**
             * Gets the numbers array formatted, with each index in the following format {n: number, status: false}
             * @param buttonsSelectedModel - the buttonSelectedModel Array containing only teh numbers
             * @returns {Array}
             */
            this.getNewNumbersArray = function(buttonsSelectedModel) {
                var newNumbersArray = [];

                _.each(buttonsSelectedModel, function(number) {
                    var val = {n: number, status: false};
                    newNumbersArray.push(val);
                });

                return newNumbersArray;
            }
        });
    }
);