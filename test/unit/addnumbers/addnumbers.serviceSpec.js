'use strict';

define([
        'angular',
        'angularMocks',
        'mlcApp',
        'Core/lottery649.controller'
    ],
    function() {
        describe('addNumbersServices', function() {
            var scope = null,
                ctrl = null,
                addNumbersServices,
                buttonsSelected,
                buttonsChooseNumbers,
                buttonSelectedModel,
                buttonFormattedModel;

            beforeEach(module('addNumbers'));
            beforeEach(inject(function($controller, $rootScope, $injector, $compile, $templateCache) {
                scope = $rootScope.$new();

                addNumbersServices = $injector.get('addNumbersServices');

                ctrl = $controller('AddNumbersController', {
                    $scope: scope
                });
            }));

            describe('when we have less the 6 buttons numbers selected', function() {
                beforeEach(function() {
                    buttonsSelected = ["10","02","03","07","05"];
                });

                it('the checkSelectedNumbersExceeded should return false', function() {
                    expect(addNumbersServices.checkSelectedNumbersExceeded(buttonsSelected)).toBe(false);
                });
            });

            describe('when we have less the 6 buttons numbers selected', function() {
                beforeEach(function() {
                    buttonsSelected = ["10","02","03","07","05","12","17"];
                });

                it('the checkSelectedNumbersExceeded should return true', function() {
                    expect(addNumbersServices.checkSelectedNumbersExceeded(buttonsSelected)).toBe(true);
                });
            });

            describe('when we have exactly 6 buttons numbers selected', function() {
                beforeEach(function() {
                    buttonsSelected = ["10","02","03","07","05","12"];
                });

                it('the checkSelectedExactly6Numbers should return true', function() {
                    expect(addNumbersServices.checkSelectedExactly6Numbers(buttonsSelected)).toBe(true);
                });
            });

            describe('when we do not have exactly 6 buttons numbers selected', function() {
                beforeEach(function() {
                    buttonsSelected = ["10","02","03","07"];
                });

                it('the checkSelectedExactly6Numbers should return false', function() {
                    expect(addNumbersServices.checkSelectedExactly6Numbers(buttonsSelected)).toBe(false);
                });
            });

            describe('when we call the buttonsChooseNumbersConstructor', function() {
                beforeEach(function() {
                    buttonsChooseNumbers = addNumbersServices.buttonsChooseNumbersConstructor();
                });

                it('it should return an array containing 49 buttons\' objects', function() {
                    expect(buttonsChooseNumbers.length).toEqual(49);
                });

                it('it should return an array where the first button has 1 as a value', function() {
                    expect(buttonsChooseNumbers[0].value).toEqual(1);
                });

                it('it should return an array where the last button has 49 as a value', function() {
                    expect(buttonsChooseNumbers[buttonsChooseNumbers.length - 1].value).toEqual(49);
                });
            });

            describe('when we remove a button from model', function() {
                beforeEach(function() {
                    buttonSelectedModel = [1, 2, 3, 4];
                    addNumbersServices.removeButtonFromModel(buttonSelectedModel, '3');
                });

                it('it should remove a button from the buttonSelectedModel Array', function() {
                    expect(buttonSelectedModel).toEqual([1, 2, 4]);
                });
            });

            describe('when we wants to get the numbers array formatted', function() {
                beforeEach(function() {
                    buttonSelectedModel = [1, 2, 3, 4, 5, 6];
                    buttonFormattedModel = addNumbersServices.getNewNumbersArray(buttonSelectedModel);
                });

                it('it should return an array with each index in the following format {n: number, status: false}', function() {
                    var result = [
                        {n: 1, status: false},
                        {n: 2, status: false},
                        {n: 3, status: false},
                        {n: 4, status: false},
                        {n: 5, status: false},
                        {n: 6, status: false}
                    ];
                    expect(buttonFormattedModel).toEqual(result);
                });
            });


        });
    }
);