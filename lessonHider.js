angular.module('directivePractice')
	.directive('lessonHider', function() {
		return {
			templateUrl: "./lessonHider.html",
			restrict: 'E',
			scope: {
				lesson: '=',
				dayAlert: '&'
			},
			controller: function($scope, lessonSvc) {
				$scope.getSchedule = lessonSvc.getSchedule()
			},
			link: function(scope, element, attributes) {
				scope.getSchedule.then(function(response) {
					scope.schedule = response.data;

					scope.schedule.forEach(function(scheduleDay) {
			          if (scheduleDay.lesson === scope.lesson) {
			          	scope.lessonDay = scheduleDay.weekday;
			          	scope.checked = true;
			        	if (scope.checked) {
			        		element.css('text-decoration', 'line-through')
			        	}
			            return;
         			 }
        			});
				})
				scope.toggleLine = function() {
					if (scope.checked) {
						element.css('text-decoration', 'line-through')
					} else {
						element.css('text-decoration', 'none')
					}
				}

			}
			
		}
	})



  //scope: {
  //twoWayDataBinding: '=',
  //stringBinding: '@',
  // functionBinding: '&'
  //}