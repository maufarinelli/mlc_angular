define([
    'angular',
    'angularMocks',
    'mlcApp',
    'Core/lottery649.controller'
    ],
    function() {

        describe('AddExtraController', function() {
            var scope = null,
                ctrl = null,
                addExtraServices;

            beforeEach(module('addExtra'));

            beforeEach(inject(function($controller, $rootScope, $injector) {
                scope = $rootScope.$new();
                scope.addNewExtra = function() {};
                scope.compareExtra = function() {};

                addExtraServices = $injector.get('addExtraServices');

                ctrl = $controller('AddExtraController', {
                    $scope: scope
                });
            }));

            describe('when the saveExtra is called and we have a valid extra number, then', function() {
                beforeEach(function() {
                    scope.rawMyExtra = '1234567';
                    scope.saveExtra();
                });

                it('it should set isInputExtraActivated to false', function() {
                    expect(scope.isInputExtraActivated).toBe(false);
                });

                it('it should set isExtraValid to true', function() {
                    expect(scope.isExtraValid).toBe(true);
                });
            });

            describe('when the saveExtra is called and we have a invalid extra number, then', function() {
                beforeEach(function() {
                    scope.rawMyExtra = '1267';
                    scope.saveExtra();
                });

                it('it should set isExtraValid to false', function() {
                    expect(scope.isExtraValid).toBe(false);
                });
            });

            afterEach(function() {
                scope.rawMyExtra = '';
            });

        });
    }
);