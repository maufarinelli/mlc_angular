define([
        'mlcApp'
    ],
    function(
        mlcApp
    ) {
        return mlcApp.controller('AddExtraController', ['$scope', function($scope) {
            // Flags
            $scope.isInputExtraActivated = false;
            $scope.isExtraValid = true;

            // I18n texts for some UI items
            $scope.buttonAddExtra = translateApp.i18n.i18nTranslated.button_add_extra;
            $scope.errorMessageExtra = translateApp.i18n.i18nTranslated.error_message_extra;
            $scope.buttonSaveExtra = translateApp.i18n.i18nTranslated.button_save;

            // The Extra collected from the input entry
            $scope.rawMyExtra = '';

            /**
             * Toggles the show/hide input extra
             */
            $scope.toggleInputExtra = function() {
                if(!$scope.isInputExtraActivated) {
                    $scope.isInputExtraActivated = true;
                    $scope.buttonAddExtra = translateApp.i18n.i18nTranslated.button_hide_field;
                }
                else {
                    $scope.isInputExtraActivated = false;
                    $scope.buttonAddExtra = translateApp.i18n.i18nTranslated.button_add_extra;
                }
            };

            /**
             * Saves the extra number
             */
            $scope.saveExtra = function() {
                var validate = _extraValidation();

                if(validate) {
                    // If there is a extra number saved, we show a confirm message
                    if(localStorage['myExtra_' + $scope.sort]) {
                        if(window.confirm(translateApp.i18n.i18nTranslated.confirm_override_extra)) {
                            _actionAddNewExtra();
                        }
                    }
                    else {
                        _actionAddNewExtra();
                    }
                    $scope.isInputExtraActivated = false;
                    $scope.buttonAddExtra = translateApp.i18n.i18nTranslated.button_add_extra;
                }
                else {
                    $scope.isExtraValid = false;
                }
            };

            /**
             * Validates if Extra has 7 exactly numbers
             * @returns {boolean}
             * @private
             */
            function _extraValidation() {
                return $scope.rawMyExtra.search(/^\d{7}$/) === 0;
            }

            /**
             * Formats a extra that is collected as a Number
             * @returns {Array} - in a following format [{ n: 1, status: false },{ n: 2, status: false }, etc... ]
             * @private
             */
            function _formatsExtra() {
                var aExtra = $scope.rawMyExtra.toString().trim().split(''),
                    oExtra = [];

                for(var i = 0; i < aExtra.length; i++) {
                    oExtra.push({n: parseInt(aExtra[i], 10), status: false});
                }

                return oExtra;
            }

            /**
             * Adds a new extra number
             * @private
             */
            function _actionAddNewExtra() {
                var formattedExtra = _formatsExtra();

                $scope.isExtraValid = true;
                $scope.addNewExtra(formattedExtra);
                $scope.compareExtra();
            }
        }]).directive('addExtraDirective', function() {
            return {
                restrict: 'EA',
                templateUrl: 'templates/add_extra.html',
                controller: 'AddExtraController'
            }
        });
    }
);