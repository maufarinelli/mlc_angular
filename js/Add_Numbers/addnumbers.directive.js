'use strict';

define([
        'addNumbers',
        'Add_Numbers/addnumbers.service'
    ],
    function(
        addGuaranteed
        ) {
        return addGuaranteed.directive('addNumbersDirective', ['addNumbersServices', function(addNumbersServices) {
            return {
                restrict: 'EA',
                scope: {
                    addNumbersButton: '@',
                    deleteAllNumbersButton: '@deleteNumbersButton',
                    errorMessageSetNumbers: '@errorMessageNumbers',
                    saveNumbersButton: '@',
                    isKeyboardActivated: '=isActivate',
                    isSelectedNumbersExceeded: '=isSelectedExceeded',
                    buttonsSelectedModel: '=',
                    deleleAllNumbersSet: '&',
                    saveNumbers: '&'
                },
                templateUrl: 'js/Add_Numbers/add_numbers.html',
                link: function($scope, element, attrs) {
                    $scope.buttonsChooseNumbers = buttonsChooseNumbersConstructor();

                    // All selected number's buttons will be pushed on it
                    $scope.buttonsSelectedModel = [];

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
                            addNumbersServices.resetAChooseNumberButton(button);

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

                        $scope.isSelectedNumbersExceeded = addNumbersServices.checkSelectedNumbersExceeded($scope.buttonsSelectedModel);
                    };

                    /**
                     * Toggles the choose numbers keyboard
                     */
                    $scope.toggleKeyboard = function() {
                        $scope.addNumbersButton = translateApp.i18n.i18nTranslated.button_add_numbers;
                        if(!$scope.isKeyboardActivated) {
                            $scope.addNumbersButton = translateApp.i18n.i18nTranslated.button_hide;
                        }
                        $scope.isKeyboardActivated = !$scope.isKeyboardActivated;
                    };

                    /**
                     * Constructor for all choose numbers buttons
                     */
                    function buttonsChooseNumbersConstructor() {
                        var buttonsChooseNumbers = [];

                        for(var i = 1; i < 50; i++) {
                            var button = {};
                            button.text = i < 10 ? '0' + i : i;
                            button.value = i;
                            buttonsChooseNumbers.push(button);
                        }

                        return buttonsChooseNumbers;
                    }
                }
            }
        }]);
    }
);