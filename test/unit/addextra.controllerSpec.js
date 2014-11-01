define([
    'angular',
    'angularMocks',
    'mlcApp',
    'Core/lottery649.controller'
    ],
    function(angular) {

        describe('AddExtraController', function() {
            var scope = null,
                ctrl = null;

            beforeEach(module('addExtra'));

            beforeEach(inject(function($controller, $rootScope) {
                scope = $rootScope.$new();
                scope.addNewExtra = function() {};
                scope.compareExtra = function() {};
                ctrl = $controller('AddExtraController', {
                    $scope: scope
                });
            }));

            // Tests AddExtraController
            /*it('isInputExtraActivated should be changed to true', function() {
                scope.isInputExtraActivated = false;
                scope.toggleInputExtra();

                expect(scope.isInputExtraActivated).toBe(true);
            });

            it('isInputExtraActivated should be changed to false', function() {
                scope.isInputExtraActivated = true;
                scope.toggleInputExtra();

                expect(scope.isInputExtraActivated).toBe(false);
            });
            
            it('actionAddNewExtra should put isExtraValid to true', function() {
                scope._actionAddNewExtra();
                expect(scope.isExtraValid).toBe(true);
            });

            it('saveExtra with a valid extra should put isInputExtraActivated to false', function() {
                scope.rawMyExtra = '1111111';
                scope.saveExtra();

                expect(scope.isInputExtraActivated).toBe(false);
            });

            it('saveExtra with a valid extra should put isInputExtraActivated to false', function() {
                scope.rawMyExtra = '1111';
                scope.saveExtra();

                expect(scope.isExtraValid).toBe(false);
            });

            it('saveExtra with a valid extra should call _actionAddNewExtra()', function() {
                spyOn(scope, '_actionAddNewExtra');

                scope.rawMyExtra = '1111111';
                scope.saveExtra();

                expect(scope._actionAddNewExtra).toHaveBeenCalled();
            });

            /*it('', function() {

            });*/

        });
    }
);