define([
        'angular',
        'angularMocks',
        'mlcApp',
        'Core/lottery649.controller'
    ],
    function() {

        describe('addGuaranteedServices', function() {
            var scope = null,
                ctrl = null,
                addGuaranteedServices;

            beforeEach(module('addGuaranteed'));

            beforeEach(inject(function($controller, $rootScope, $injector) {
                scope = $rootScope.$new();

                addGuaranteedServices = $injector.get('addGuaranteedServices');

                ctrl = $controller('AddGuaranteedController', {
                    $scope: scope
                });
            }));

            describe('when you give to extraValidation a good guaranteed number format', function() {
                it('it should be valid', function() {
                    var isValid = addGuaranteedServices.extraValidation('12345678-90');
                    expect(isValid).toBe(true);
                });
            });

            describe('when you give to extraValidation a wrong guaranteed number format', function() {
                it('it should not be valid', function() {
                    var isNotValid = addGuaranteedServices.extraValidation('1234567890');
                    expect(isNotValid).toBe(false);
                });
            });

            describe('when you format a guaranteed number', function() {
                var formatted;

                // A good guaranteed number format is -> {Object} in a following format { n: 00000000-00, status: false }
                beforeEach(function() {
                    formatted = addGuaranteedServices.formatsGuaranteed('12345678-90');
                });

                it('it should return an object with n property containing the number', function() {
                    expect(formatted.n).toBe('12345678-90');
                });

                it('it should return an object with status property as false', function() {
                    expect(formatted.status).toBe(false);
                });
            });

        });
    }
);