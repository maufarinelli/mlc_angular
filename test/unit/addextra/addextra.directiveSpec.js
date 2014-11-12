'use strict';

define([
        'angular',
        'angularMocks',
        'addExtra',
        'Add_Extra/addextra.directive'
    ],
    function() {
        describe('addExtraDirective', function() {
            var scope = null,
                compile = null,
                extraDirective = '',
                extraCache = '',
                rootScope = null,
                templateCache = null;

            /*beforeEach(function() {
                angular.mock.module('addExtra');
            });
            //beforeEach(module('foo'));
            beforeEach(function() {
                module('addExtraDirective');
            });*/

            beforeEach(inject(function($rootScope, $compile, $templateCache) {
                scope = $rootScope.$new();
                rootScope = $rootScope;
                templateCache = $templateCache;
                var t = templateCache.get('js/Add_Extra/add_extra.html.js');
                console.log(t);
                templateCache.put('<div add-extra-directive></div>', t);

                scope.isInputExtraActivated = false;
                scope.buttonAdd = 'Add Extra';
                scope.buttonSave = 'Save';
                scope.isExtraValid = false;
                scope.rawMyExtra = '';

                compile = $compile;
            }));

            it('toggleInputExtra should toggle input extra', function() {
                extraDirective = angular.element('<div add-extra-directive></div>');
                //extraCache = templateCache.put(js/Add_Extra/add_extra.html, 'Add_Extra/add_extra.html');
                var element = compile(extraDirective)(scope);
                scope.$digest();

                console.log(element);
                //element.find('button')[0].click();

                //expect(element.scope().isInputExtraActivated).toBe(true);
            });
        });
    }
);