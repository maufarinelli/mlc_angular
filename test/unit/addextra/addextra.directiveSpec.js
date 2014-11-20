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
                extraDirective = '',
                element = '';

            beforeEach(function() {
                angular.mock.module('addExtra');
                inject(function($rootScope, $compile, $templateCache) {
                    scope = $rootScope.$new();
                    $templateCache.put('js/Add_Extra/add_extra.html', window.__html__['js/Add_Extra/add_extra.html']);
                    compile = $compile;
                })
            });

            describe('when an Add Extra button has been clicked', function() {
                beforeEach(function() {
                    extraDirective = '<div add-extra-directive button-add="buttonAddExtra" button-save="{{buttonSaveExtra}}" error-message="{{errorMessageExtra}}" is-activated="isInputExtraActivated" is-extra-valid="isExtraValid" save-extra="saveExtra()" raw-my-extra="rawMyExtra"></div>';
                    element = compile(extraDirective)(scope);
                    scope.$digest();
                });

                it('it should set isInputExtraActivated to true', function() {
                    element.find('button')[0].click();
                    expect(element.isolateScope().isInputExtraActivated).toBe(true);
                });

                it('it should show the element that contains the extra input and the save extra button', function() {
                    element.find('button')[0].click();
                    expect(element[0].querySelector('.choose-extra').classList.contains('is-hidden')).toBe(false);
                });

                afterEach(function() {
                    element.isolateScope().isInputExtraActivated = false;
                });
            });
        });
    }
);