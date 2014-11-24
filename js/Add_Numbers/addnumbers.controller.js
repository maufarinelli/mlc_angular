define([
        'addNumbers',
        'Add_Numbers/addnumbers.service'
    ], function(
        addNumbers
        ) {
        return addNumbers.controller('AddNumbersController', ['$scope', 'addNumbersServices', function($scope, addNumbersServices) {
            // Flags
            $scope.isKeyboardActivated = false;
            $scope.isSelectedNumbersExceeded = false;

            // All selected number's buttons will be pushed on it
            $scope.buttonsSelectedModel = [];

            // I18n texts for some UI items
            $scope.addNumbersButton = translateApp.i18n.i18nTranslated.button_add_numbers;
            $scope.deleteAllNumbersButton = translateApp.i18n.i18nTranslated.button_delete_all;
            $scope.saveNumbersButton = translateApp.i18n.i18nTranslated.button_save;
            $scope.errorMessageSetNumbers = translateApp.i18n.i18nTranslated.error_message_set_numbers;

            /**
            * Save a set of numbers
            */
            $scope.saveNumbers = function() {
                var newNumbersArray = [];

                if(!addNumbersServices.checkSelectedExactly6Numbers($scope.buttonsSelectedModel)) {
                    $scope.isSelectedNumbersExceeded = true;
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

                addNumbersServices.resetChooseNumbersButtons();
                $scope.buttonsSelectedModel = [];
            };

            /**
            * Deletes all set of numbers
            */
            $scope.deleleAllNumbersSet = function() {
                if(window.confirm( translateApp.i18n.i18nTranslated.confirm_delete_all )) {
                    $scope.removeAllNumber();
                }
            };
        }]);
    }
);