'use strict';

define([
    'angular',
    'angularMocks',
    'addGuaranteed',
    'Add_Guaranteed/add_guaranteed.html'
    ],
    function() {
        describe('addGuaranteedDirective', function() {
            var scope = null,
                compile = null,
                guaranteedDirective = '',
                element = '';

            beforeEach(function() {
                angular.mock.module('addGuaranteed');
                inject(function($rootScope, $compile, $templateCache) {
                    scope = $rootScope.$new();
                    $templateCache.put('js/Add_Guaranteed/add_guaranteed.html', window.__html__['js/Add_Guaranteed/add_guaranteed.html']);
                    compile = $compile;
                });
            });

            describe('when an Add Extra button has been clicked', function() {
                beforeEach(function() {
                    guaranteedDirective = '<div add-guaranteed-directive sort="{{sort}}" button-add="buttonAddGuaranteed" button-save="{{buttonSaveGuaranteed}}" error-message="{{errorMessageGuaranteed}}" is-activated="isInputGuaranteedActivated" is-guaranteed-valid="isGuaranteedValid" save-guaranteed="saveGuaranteed()" raw-my-guaranteed="rawMyGuaranteed"></div>';
                    element = compile(guaranteedDirective)(scope);
                    scope.$digest();
                });

                it('it should set isInputGuaranteedActivated to true', function() {
                    element.find('button')[0].click();
                    expect(element.isolateScope().isInputGuaranteedActivated).toBe(true);
                });

                it('it should show the element that contains the guaranteed input and the save guaranteed button', function() {
                    element.find('button')[0].click();
                    expect(element[0].querySelector('.choose-guaranteed').classList.contains('is-hidden')).toBe(false);
                });

                afterEach(function() {
                    element.isolateScope().isInputGuaranteedActivated = false;
                });
            });
        });
    }
);