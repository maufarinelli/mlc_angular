define([
        'mlcApp'
    ],
    function(
        mlcApp
    ) {
        return mlcApp.controller('AddGuaranteedController', function($scope) {
            // Flags
            $scope.isInputGuaranteedActivated = false;
            $scope.isGuaranteedValid = true;

            // I18n texts for some UI items
            $scope.buttonAddGuaranteed = translateApp.i18n.i18nTranslated.button_add_guaranteed;
            $scope.errorMessageGuaranteed = translateApp.i18n.i18nTranslated.error_message_guaranteed;
            $scope.buttonSaveGuaranteed = translateApp.i18n.i18nTranslated.button_save;

            // The Guaranteed collected from the input entry
            $scope.rawMyGuaranteed = '';

            /**
             * Toggles the show/hide input guaranteed
             */
            $scope.toggleGuaranteedExtra = function() {
                if(!$scope.isInputGuaranteedActivated) {
                    $scope.isInputGuaranteedActivated = true;
                    $scope.buttonAddGuaranteed = translateApp.i18n.i18nTranslated.button_hide_field;
                }
                else {
                    $scope.isInputGuaranteedActivated = false;
                    $scope.buttonAddGuaranteed = translateApp.i18n.i18nTranslated.button_add_guaranteed;
                }
            };

            /**
             * Saves the Guaranteed prize number
             */
            $scope.saveGuaranteed = function() {
                var validate = _extraValidation();

                if(validate) {
                    if(localStorage['myGuaranteedNumber_' + $scope.sort]) {
                        if(window.confirm(translateApp.i18n.i18nTranslated.confirm_override_guaranteed)) {
                            _actionAddNewGuaranteed();
                        }
                    }
                    else {
                        _actionAddNewGuaranteed();
                    }
                    $scope.isInputGuaranteedActivated = false;
                    $scope.buttonAddGuaranteed = translateApp.i18n.i18nTranslated.button_add_guaranteed;
                }
                else {
                    $scope.isGuaranteedValid = false;
                }
            };

            /**
             * Validates if GUaranteed number has exactly 8 numbers, hyphen, 2 numbers, as the following format: 00000000-00
             * @returns {boolean}
             * @private
             */
            function _extraValidation() {
                return $scope.rawMyGuaranteed.search(/^\d{8}-\d{2}$/) === 0;
            }

            /**
             * Formats a Guaranteed prize number that is collected as a String
             * @returns {Object} - in a following format { n: 00000000-00, status: false }
             * @private
             */
            function _formatsGuaranteed() {
                return {n: $scope.rawMyGuaranteed.trim(), status: false};
            }

            /**
             * Adds a new guaranteed prize number
             * @private
             */
            function _actionAddNewGuaranteed() {
                var oGuaranteed = _formatsGuaranteed();

                $scope.isGuaranteedValid = true;
                $scope.addNewGuaranteed(oGuaranteed);
                $scope.compareGuaranteed();
            }

        }).directive('addGuaranteedDirective', function() {
            return {
                restrict: 'EA',
                templateUrl: 'templates/add_guaranteed.html',
                controller: 'AddGuaranteedController'
            }
        });
    }
);