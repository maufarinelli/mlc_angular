define([
    'angular',
    'angularMocks',
    'mlcApp',
    'Core/lottery649.controller'
    ],
    function(angular) {

        beforeEach(function() {
            this.addMatchers({
                toBeArray: function() {
                    return this.actual instanceof Array;
                },
                toBeOneOf: function(expected) {
                    var result;

                    if(expected instanceof Array) {
                        result = this.actual === expected[0] || this.actual === expected[1];
                    }
                    else {
                        result = false;
                    }

                    return result;
                },
                toBeShortdateFormat: function() {
                    return this.actual === '' || this.actual.search(/[0-9]{4}-[0-9]{2}-[0-9]{2}/) !== -1;
                },
                toBeExtraFormat: function() {
                    return this.actual === '' || this.actual.search(/^\d{7}$/) === 0;
                },
                toBeGuaranteedFormat: function() {
                    return this.actual === '' || this.actual.search(/^\d{8}-\d{2}$/) === 0;
                }
            });
        });

        describe('Lottery649Controller', function() {
            var scope = null;
            var ctrl = null;

            beforeEach(module('mlcApp'));

            beforeEach(inject(function($controller) {
                scope = {};
                ctrl = $controller('Lottery649Controller', {
                    $scope: scope
                });
            }));

            // Tests Lottery649Controller
            it('sort should be lotto649', function() {
                expect(scope.sort).toBe('lotto649');
            });

            it('title should be Lotto 649', function() {
                expect(scope.sortTitle).toBe('Lotto 649');
            });

            it('province could be "qc" or "on"', function() {
                var provinceList = ['qc', 'on'];

                expect(scope.province).toBe(provinceList[0] || provinceList[1]);
            });

            it('lastDraw must be an array', function() {
                expect(scope.lastDraw).toBeArray();
            });

            it('lastDraw length must be 0 or 6', function() {
                expect(scope.lastDraw.length).toBeOneOf([0,6]);
            });

            it('shortdateLastDraw must have the yyy-mm-dd format or empty string', function() {
                expect(scope.shortdateLastDraw).toBeShortdateFormat();
            });

            it('extraLastDraw must have a 0000000 format or empty string', function() {
                expect(scope.extraLastDraw).toBeExtraFormat();
            });

            it('Guaranteed prize must have a 00000000-00 format or empty string', function() {
                expect(scope.guaranteedLastDraw).toBeGuaranteedFormat();
            });

            it('init must be called', function() {
                spyOn(scope, 'getLastDraw');
            });
        });

        describe('AddExtraController', function() {
            var scope = null,
                ctrl = null;
                //_extraValidation = null;

            beforeEach(module('addExtra'));

            beforeEach(inject(function($controller, $rootScope) {
                scope = $rootScope.$new();
                /*_extraValidation = function() {
                    return scope.rawMyExtra.search(/^\d{7}$/) === 0;
                };*/
                ctrl = $controller('AddExtraController', {
                    $scope: scope
                });
            }));

            // Tests AddExtraController
            it('isInputExtraActivated should be changed to true', function() {
                scope.isInputExtraActivated = false;
                scope.toggleInputExtra();

                expect(scope.isInputExtraActivated).toBe(true);
            });

            it('isInputExtraActivated should be changed to false', function() {
                scope.isInputExtraActivated = true;
                scope.toggleInputExtra();

                expect(scope.isInputExtraActivated).toBe(false);
            });

            /*it('_extraValidation function should return false', function() {
                scope.rawMyExtra = '';
                expect(_extraValidation()).toBe(false);
            });

            it('_extraValidation function should return true', function() {
                scope.rawMyExtra = '1111111';
                expect(_extraValidation()).toBe(true);
            });*/

        });
    }
);