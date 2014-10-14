define([
        'mlcApp'
    ], function(
        mlcApp
        ) {
        return mlcApp.controller('AddNumbersController', function($scope) {
            // Flags
            $scope.isKeyboardActivated = false;
            $scope.isSelectedNumbersExceeded = false;

            // All choose number's buttons will be pushed on it
            $scope.buttonsChooseNumbers = [];

            // All selected number's buttons will be pushed on it
            $scope.buttonsSelectedModel = [];

            // I18n texts for some UI items
            $scope.addNumbersButton = translateApp.i18n.i18nTranslated.button_add_numbers;
            $scope.deleteAllNumbersButton = translateApp.i18n.i18nTranslated.button_delete_all;
            $scope.saveNumbersButton = translateApp.i18n.i18nTranslated.button_save;
            $scope.errorMessageSetNumbers = translateApp.i18n.i18nTranslated.error_message_set_numbers;

            /**
            * Toggles the choose numbers keyboard
            */
            $scope.toggleKeyboard = function() {
                if(!$scope.isKeyboardActivated) {
                    $scope.isKeyboardActivated = true;
                    $scope.addNumbersButton = translateApp.i18n.i18nTranslated.button_hide;
                }
                else {
                    $scope.isKeyboardActivated = false;
                    $scope.addNumbersButton = translateApp.i18n.i18nTranslated.button_add_numbers;
                }
            };

            /**
            * Saves a set of numbers
            * {event} $event - The click event 
            */
            $scope.selectedNumber = function($event) {
                var button = $event.currentTarget,
                    selectedStatus = angular.element(button).data('button-selected'),
                    value = angular.element(button).val();

                // If clicked button was already selected, reset it
                if(selectedStatus) {
                    _resetAChooseNumberButton(button);
                    
                    _.remove($scope.buttonsSelectedModel, function(num){
                        return num === parseInt(value, 10);
                    });
                }
                else {
                    // Select a button
                    angular.element(button).data('button-selected', true);
                    angular.element(button).removeClass('btn-default').addClass('btn-success');
                    
                    // Insert its value into the buttonsSelectedModel and sort ASC too
                    $scope.buttonsSelectedModel.push(parseInt(value, 10));
                    $scope.buttonsSelectedModel = _.sortBy($scope.buttonsSelectedModel);                    
                }
                _checkSelectedNumbersExceeded();
            };

            /**
            * Save a set of numbers
            */
            $scope.saveNumbers = function() {
                var newNumbersArray = [];

                if(!_checkSelectedExactly6Numbers()) {
                    return;
                }

                // Push a new numbers with status false into newNumbersArray
                _.each($scope.buttonsSelectedModel, function(number) {
                    var val = {n: number, status: false};
                    newNumbersArray.push(val);
                });

                // Add new numbers to the main lottery controller and compare
                $scope.addNewNumbers(newNumbersArray);
                $scope.compare();

                 _resetChooseNumbersButtons();
            };

            /**
            * Deletes all set of numbers
            */
            $scope.deleleAllNumbersSet = function() {
                if(window.confirm( translateApp.i18n.i18nTranslated.confirm_delete_all )) {
                    $scope.removeAllNumber();
                }
            };


            /* Private functions */

            /**
            * Resets all choose numbers buttons
            */
            function _resetChooseNumbersButtons() {
                $('.btn-choose-numbers').each(function(index, button) {
                    _resetAChooseNumberButton(button);
                    $scope.buttonsSelectedModel = [];
                });
            }

            /**
            * Resets a choose numbers button
            */
            function _resetAChooseNumberButton(button) {
                angular.element(button).data('button-selected', false);
                angular.element(button).removeClass('btn-success').addClass('btn-default');
            }

            /**
            * Checks if selected numbers exceeded maximum of 6
            */
            function _checkSelectedNumbersExceeded() { 
                if($scope.buttonsSelectedModel.length > 6) {
                    $scope.isSelectedNumbersExceeded = true;
                }
                else {
                    $scope.isSelectedNumbersExceeded = false;
                }
            };

            /**
            * Checks if user has selected exactly 6 numbers
            */
            function _checkSelectedExactly6Numbers() {
                if($scope.buttonsSelectedModel.length !== 6) {
                    $scope.isSelectedNumbersExceeded = true;
                    return false;
                }
                return true;
            }

            /**
            * Constructor for all choose numbers buttons 
            */
            function _buttonsChooseNumbersConstructor() {
                for(var i = 1; i < 50; i++) {
                    var button = {};
                    button.text = i < 10 ? '0' + i : i;
                    button.value = i;
                    $scope.buttonsChooseNumbers.push(button);
                }
            }
            _buttonsChooseNumbersConstructor();
        }).directive('addNumbersDirective', function() {
            return {
                restrict: 'EA',
                templateUrl: 'templates/add_numbers.html',
                controller: 'AddNumbersController'
            }
        });
    }
);