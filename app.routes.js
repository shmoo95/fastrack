(function() {

	var app = angular.module('fastrackApp.router', ['ui.router']);
	
	app.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/profile');
		
		$stateProvider
		
			.state('profile', {
				url: '/profile',
				templateUrl: 'components/profile/profileView.html'
			})
			
			.state('search', {
				url: '/search',
				templateUrl: 'components/search/searchView.html'
			})
			
			.state('partiesOfInterest', {
				url: '/parties-of-interest',
				templateUrl: 'components/partiesOfInterest/partiesOfInterestView.html'
			})
			
			.state('conversation', {
				url: '/conversation',
				templateUrl: 'components/conversation/conversationView.html'
			})
			
	});

})();