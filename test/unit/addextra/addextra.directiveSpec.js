'use strict';

define([
        'angular',
        'angularMocks',
        'addExtra',
        'Add_Extra/add_extra.html'
    ],
    function() {
        describe('addExtraDirective', function() {
            var scope = null,
                compile = null,
                rootScope = null,
                extraDirective = '';

            beforeEach(function() {
                angular.mock.module('addExtra');
                module('templates');
                inject(function($rootScope, $compile) {
                    scope = $rootScope.$new();
                    rootScope = $rootScope;

                    compile = $compile;
                })
            });

            describe('when an Add Extra button has been clicked', function() {
                it('it should set isInputExtraActivated to true', function() {
                    extraDirective = '<div add-extra-directive button-add="buttonAddExtra" button-save="{{buttonSaveExtra}}" error-message="{{errorMessageExtra}}" is-activated="isInputExtraActivated" is-extra-valid="isExtraValid" save-extra="saveExtra()" raw-my-extra="rawMyExtra"></div>';
                    var element = compile(extraDirective)(scope);
                    scope.$digest();

                    element.find('button')[0].click();
                    //expect(element.isolateScope().isInputExtraActivated).toBe(true);
                    expect(element[0].querySelector('.choose-extra').classList.contains('is-hidden')).toBe(false);
                });
            });
        });
    }
);