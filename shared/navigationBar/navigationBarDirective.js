(function() {
	var app = angular.module('fastrackApp.navigationBar.directive', []);
	
	app.directive('navigationBar', function() {
		return {
			restrict: 'E',
			templateUrl: 'shared/navigationBar/navigationBarView.html'
		};
	});
	
})();