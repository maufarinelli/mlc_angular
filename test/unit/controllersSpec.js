define([
	'angular', 
	'angularMocks',
	'mlcApp',
	'controllers/lottery649.controller'
	], 
	function(angular) {

		describe('Lottery649Controller', function() {
			var $scope = null;
	        var ctrl = null;

	        beforeEach(module('mlcApp'));

	        beforeEach(inject(function($controller) {
			    scope = {};
			    ctrl = $controller('Lottery649Controller', {$scope:scope});
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

		});
	}
);