(function() {
	var app = angular.module('fastrackApp.search.controller', [])

	app.controller('searchFormController', function($scope) {

		$scope.options = [
			{ label: '400m', value: '400m dash' },
			{ label: '800m', value: '800m dash' }
		];

		$scope.years = [
			{label: '2015', value: 2015},
			{label: '2016', value: 2016},
			{label: '2017', value: 2017},
			{label: '2018', value: 2018},
			{label: '2019', value: 2019}
		];

		// Although this object has the same properties as the one in $scope.options,
		// Angular considers them different because it compares based on reference
		$scope.incorrectlySelected = { label: 'two', value: 2 };

		// Here we are referencing the same object, so Angular inits the select box correctly

	});

	app.filter('capitalize', function() {
		return function(input, all) {
			return (!!input) ? input.replace(/([^\W_]+[^\s-]*) */g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
		}
	});

})();