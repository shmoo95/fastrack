(function() {

	var app = angular.module('fastrackApp', [
		'fastrackApp.router',
		'fastrackApp.navigationBar.directive',
		'fastrackApp.navigationBar.controller',
		'fastrackApp.profile.controller.panelController',
		'fastrackApp.profile.controller.profileDataController',
		'fastrackApp.search.controller',
		'fastrackApp.partiesOfInterest.controller'
	]);
	
})();