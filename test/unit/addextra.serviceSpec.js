define([
    'angular',
    'angularMocks',
    'mlcApp',
    'Core/lottery649.controller'
    ],
    function(angular) {

        describe('addExtraServices', function() {
            var scope = null,
                ctrl = null,
                addExtraServices;

            beforeEach(module('addExtra'));

            beforeEach(inject(function($controller, $rootScope, $injector) {
                scope = $rootScope.$new();

                addExtraServices = $injector.get('addExtraServices');  

                ctrl = $controller('AddExtraController', {
                    $scope: scope
                });
            }));

            // Tests AddExtraService
            it('_extraValidation function should return false', function() {
                scope.rawMyExtra = '';
                expect(addExtraServices._extraValidation(scope.rawMyExtra)).toBe(false);
            });

            it('_extraValidation function should return true', function() {
                scope.rawMyExtra = '1111111';
                expect(addExtraServices._extraValidation(scope.rawMyExtra)).toBe(true);
            });

            it('_formatsExtra function should return an array of 7 objects', function() {
                scope.rawMyExtra = 1111111;
                expect(addExtraServices._formatsExtra(scope.rawMyExtra).length).toBe(7);
            });

            it('_formatsExtra function should return objects with n property', function() {
                scope.rawMyExtra = 2222222;
                var formattedExtra = addExtraServices._formatsExtra(scope.rawMyExtra);
                expect(formattedExtra[0].n).toBe(2);
            });

            it('_formatsExtra function should return objects with n property', function() {
                scope.rawMyExtra = 3333333;
                var formattedExtra = addExtraServices._formatsExtra(scope.rawMyExtra);
                expect(formattedExtra[0].status).toBe(false);
            });

            /*it('isInputExtraActivated should be changed to true', function() {
                scope.isInputExtraActivated = false;
                scope.toggleInputExtra();

                expect(scope.isInputExtraActivated).toBe(true);
            });

            it('isInputExtraActivated should be changed to false', function() {
                scope.isInputExtraActivated = true;
                scope.toggleInputExtra();

                expect(scope.isInputExtraActivated).toBe(false);
            });*/

        });
    }
);