(function() {
	var app = angular.module('fastrackApp.profile.controller.profileDataController', [])

	app.controller('ProfileDataController', ['$scope', '$http', function ($scope, $http) {
		$http.get('components/profile/studentProfile.json').success( function(data) {
			$scope.profile = data;
		});  
		
		$scope.notSorted = function(obj){
			if (!obj) {
				return [];
			}
			
			return Object.keys(obj);
		}
	}]);

})();