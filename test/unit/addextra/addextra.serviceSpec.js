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

            describe('when you give to extraValidation a good extra number format', function() {
                it('it should be valid', function() {
                    scope.rawMyExtra = '1111111';
                    var isValid = addExtraServices._extraValidation(scope.rawMyExtra)
                    expect(isValid).toBe(true);
                });
            });

            describe('when you give to extraValidation a wrong extra number format', function() {
                it('_extraValidation function should return false', function() {
                    scope.rawMyExtra = '';
                    var isNotValid = addExtraServices._extraValidation(scope.rawMyExtra);
                    expect(isNotValid).toBe(false);
                });
            });

            describe('when you format a extra number', function() {
                var formatted;

                beforeEach(function() {
                    formatted = addExtraServices._formatsExtra(1111111);
                });

                it('_formatsExtra function should return an array of 7 objects', function() {
                    expect(formatted.length).toBe(7);
                });

                it('_formatsExtra function should return objects with n property', function() {
                    expect(formatted[0].n).toBe(1);
                });

                it('_formatsExtra function should return objects with n property', function() {
                    expect(formatted[0].status).toBe(false);
                });
            });
        });
    }
);