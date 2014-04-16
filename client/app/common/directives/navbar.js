'use strict'

angular.module('freefootieApp')
  .directive('navbar', function ($location) {
  	return {
  		restrict: 'E',
      	template: '<header class="navbar" id="top">'
			      +'<div class="container" ng-transclude>'
			        +'<div class="navbar-header">'
			          +'<a href="/" class="navbar-brand">Free Footie</a>'
			        +'</div>'
			      +'</div>'
			    +'</header>',
      	transclude:true,
  		link: function(scope, el, attrs) {

        	
  		}
  	};
  });