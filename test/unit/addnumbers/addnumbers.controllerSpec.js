'use strict';

define([
        'angular',
        'angularMocks',
        'mlcApp',
        'Core/lottery649.controller'
    ],
    function() {
        describe('AddNumbersController', function() {
            var scope = null,
                ctrl = null,
                addNumbersServices;

            beforeEach(module('addNumbers'));

            beforeEach(inject(function($controller, $rootScope, $injector) {
                scope = $rootScope.$new();
                scope.addNewNumbers = function() {};
                scope.compare = function() {};

                addNumbersServices = $injector.get('addNumbersServices');

                ctrl = $controller('AddNumbersController', {
                    $scope: scope
                });
            }));

            describe('when it is loaded', function() {
                it('Keyboard should not be activated', function() {
                    expect(scope.isKeyboardActivated).toBe(false);
                });

                it('selected Numbers should not be exceeded', function() {
                    expect(scope.isSelectedNumbersExceeded).toBe(false);
                });
            });

            describe('when you save Numbers and we have exactly 6 numbers on the model', function() {
                var mockNewNumbersArray = [];

                beforeEach(function() {
                    spyOn(scope, 'addNewNumbers');
                    spyOn(scope, 'compare');
                    spyOn(addNumbersServices, 'resetChooseNumbersButtons');

                    scope.buttonsSelectedModel = [1,2,3,4,5,6];
                    mockNewNumbersArray = [
                        {n: 1, status: false},
                        {n: 2, status: false},
                        {n: 3, status: false},
                        {n: 4, status: false},
                        {n: 5, status: false},
                        {n: 6, status: false},
                    ];
                    scope.saveNumbers();
                });

                it('it should call addNewNumbers function', function() {
                    expect(scope.addNewNumbers).toHaveBeenCalled();
                });

                it('it should call addNewNumbers function with an object', function() {
                    expect(scope.addNewNumbers).toHaveBeenCalledWith(mockNewNumbersArray);
                });

                it('it should call resetChooseNumbersButtons function', function() {
                    expect(addNumbersServices.resetChooseNumbersButtons).toHaveBeenCalled();
                });

                it('it should reset the buttonsSelectedModel array', function() {
                    expect(scope.buttonsSelectedModel).toEqual([]);
                });
            });

            describe('when you save Numbers and we DO NOT have exactly 6 numbers on the model', function() {
                beforeEach(function() {
                    scope.buttonsSelectedModel = [1];
                    scope.saveNumbers();
                });

                it('it should set isSelectedNumbersExceeded to true', function() {
                    expect(scope.isSelectedNumbersExceeded).toBe(true);
                });
            });
        });
    }
);