(function() {
	var app = angular.module('fastrackApp.navigationBar.controller', []);
	
	app.controller('navigationPageController', function() {
		this.page = 1;
		
		this.selectPage = function(setPage) {
			this.page = setPage;
		};
		
		this.isSelected = function(checkPage) {
			return this.page === checkPage;
		};
	});
	
})();