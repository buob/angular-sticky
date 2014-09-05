angular.module('sticky', [])

.directive('sticky', ['$timeout', function($timeout){
	return {
		restrict: 'A',
		scope: {
			offset: '@',
		},
		link: function($scope, $elem, $attrs){
			$timeout(function(){
				var offsetTop = $scope.offset || 0,
				        $window = angular.element(window);


				// Check if our anchor has passed the top of the window
				//
				function checkSticky(){
					if ($elem.parent()[0].getBoundingClientRect().top - offsetTop <= 0 ) {
						$elem.css({ top: offsetTop + 'px', position: 'fixed' });
					} else {
						$elem.css({ top: null, position: null });
					}
				}

				// keep position after changing our sticky element to position fixed
				$elem.wrap("<div class='sticky-anchor'></div>");

				$window.on('scroll', checkSticky);
			});
		},
	};
}]);
