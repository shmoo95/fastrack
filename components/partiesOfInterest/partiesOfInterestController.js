(function() {
	var app = angular.module('fastrackApp.partiesOfInterest.controller', [])

	app.controller('ListController', ['$scope', '$http', function MyController($scope, $http) {
		$http.get('components/partiesOfInterest/data.json').success(function(data) {
			$scope.artists = data;
			$scope.artistOrder = 'name';
		});  
	}]);

})();