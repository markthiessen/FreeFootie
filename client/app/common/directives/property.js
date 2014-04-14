'use strict'

angular.module('freefootieApp')
  .directive('property', function ($compile) {
  	return {
      template: '<label class="control-label col-sm-3">{{title}}:</label>',
  		restrict: 'E',
      scope: {
        title: "@",
        model: "=",
        options: "@"
      },
  		link: function(scope, el, attrs) {
        if(scope.options) {
          var control = $compile('<div class="col-sm-9"><select class="form-control" ng-model="' + attrs.model + '" ng-options="'+ scope.options + '"></select></div>')(scope.$parent);
        } else {
          var control = $compile('<div class="col-sm-9"><input class="form-control" type="text" ng-model="model"/></div>')(scope);
        }
        el.append(control);
  		}
  	};
  });
