define([
        'angular',
        'angularMocks',
        'mlcApp',
        'Core/lottery649.controller'
    ],
    function() {

        describe('AddGuaranteedController', function() {
            var scope = null,
                ctrl = null,
                addGuaranteedServices;

            beforeEach(module('addGuaranteed'));

            beforeEach(inject(function($controller, $rootScope, $injector) {
                scope = $rootScope.$new();
                scope.addNewGuaranteed = function() {};
                scope.compareGuaranteed = function() {};;

                addGuaranteedServices = $injector.get('addGuaranteedServices');

                ctrl = $controller('AddGuaranteedController', {
                    $scope: scope
                });
            }));

            describe('when the saveGuaranteed is called and we have a valid guaranteed number, then', function() {
                beforeEach(function() {
                    scope.rawMyGuaranteed = '12345678-90';
                    scope.saveGuaranteed();
                });

                it('it should set isInputGuaranteedActivated to false', function() {
                    expect(scope.isInputGuaranteedActivated).toBe(false);
                });

                it('it should set isGuaranteedValid to true', function() {
                    expect(scope.isGuaranteedValid).toBe(true);
                });

                afterEach(function() {
                    scope.rawMyGuaranteed = '';
                });
            });

            describe('when the saveGuaranteed is called and we have a invalid guaranteed number, then', function() {
                beforeEach(function() {
                    scope.rawMyGuaranteed = '567890';
                    scope.saveGuaranteed();
                });

                it('it should set isGuaranteedValid to false', function() {
                    expect(scope.isGuaranteedValid).toBe(false);
                });

                afterEach(function() {
                    scope.rawMyGuaranteed = '';
                });
            });
        });
    }
);