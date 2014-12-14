'use strict';

define([
    'angular',
    'angularMocks',
    'addNumbers',
    'Add_Numbers/add_numbers.html'
    ],
    function() {
        describe('addNumbersDirective', function() {
            var scope = null,
                isolateScope = null,
                compile = null,
                addNumbersServices,
                numbersDirective = '',
                element = '';

            beforeEach(function() {
                angular.mock.module('addNumbers');

                inject(function($rootScope, $compile, $templateCache, $injector) {
                    scope = $rootScope.$new();
                    $templateCache.put('js/Add_Numbers/add_numbers.html', window.__html__['js/Add_Numbers/add_numbers.html']);
                    compile = $compile;
                    addNumbersServices = $injector.get('addNumbersServices');
                });
            });

            beforeEach(function() {
                numbersDirective = '<div add-numbers-directive is-activate="isKeyboardActivated" is-selected-exceeded="isSelectedNumbersExceeded" buttons-selected-model="buttonsSelectedModel" delele-all-numbers-set="deleleAllNumbersSet()" save-numbers="saveNumbers()"></div>';
                element = compile(numbersDirective)(scope);
                scope.$digest();
            });

            describe('When you select a number and its has not been already selected', function() {
                beforeEach(function() {
                    element[0].querySelector('button[value="7"]').click();
                });

                it('it should set the button as green state', function() {
                    expect(element[0].querySelector('button[value="7"]').classList.contains('btn-success')).toBe(true);
                });

                it('it should push button value into buttonsSelectedModel', function() {
                    expect(scope.buttonsSelectedModel).toEqual([7]);
                });

                it('it the selected numbers should not exceed the maximum of 6', function() {
                    expect(scope.isSelectedNumbersExceeded).toBe(false);
                });

                afterEach(function() {
                    element[0].querySelector('button[value="7"]').click();
                });
            });

            // only restarting from lenovo
            describe('When you select a number and its has been already selected', function() {
                beforeEach(function() {
                    element[0].querySelector('button[value="7"]').click();
                    element[0].querySelector('button[value="7"]').click();
                    isolateScope = element.isolateScope;

                    spyOn(scope, 'resetAChooseNumberButton');
                    spyOn(addNumbersServices, 'removeButtonFromModel');
                });

                it('it should call resetAChooseNumberButton', function() {
                    expect(element.isolateScope().resetAChooseNumberButton).toHaveBeenCalled();
                });

                it('it should call resetAChooseNumberButton', function() {
                    expect(addNumbersServices.removeButtonFromModel).toHaveBeenCalled();
                });

                afterEach(function() {
                    element[0].querySelector('button[value="7"]').click();
                });
            });
        });
    }
);