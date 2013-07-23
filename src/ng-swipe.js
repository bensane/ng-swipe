angular.module('bensane.ng-swipe', []);
angular.module('bensane.ng-swipe').directive('swipe', function(){

        var linker = function(scope, element, attrs){
            window.mySwipe = new Swipe(document.getElementById('slider'), {
                startSlide: 0,
                speed: 400,
                auto: false,
                continuous: true,
                disableScroll: false,
                stopPropagation: false,
                callback: function(index, elem) {
                    scope.safeApply(function(){
                        scope.executeCallback();
                    });
                },
                transitionEnd: function(index, elem) {}
            });
        };

        var controller = function($scope, $element){
            $scope.executeCallback = function(){
                $scope.callback();
            }

            $scope.next = function(){
                mySwipe.next();
            }
            $scope.prev = function(){
                mySwipe.prev();
            }

            $scope.safeApply = function(fn) {
                var phase = this.$root.$$phase;
                if(phase == '$apply' || phase == '$digest')
                    this.$eval(fn);
                else
                    this.$apply(fn);
            };
        };



    return{
        restrict:'E',
        link:linker,
        controller:controller,
        templateUrl:'../src/swipe.html',
        transclude:true,
        scope:{
            callback: '&',
            next:'=',
            prev:'='
                }
    }
});




//angular.module('bensane.ng-swipe').
//app.directive('ng-swipe', function(){
//        var linker = function(scope, element, attrs){
//            window.mySwipe = new Swipe(document.getElementById('slider'), {
//                startSlide: 0,
//                speed: 400,
//                auto: false,
//                continuous: true,
//                disableScroll: false,
//                stopPropagation: false,
//                callback: function(index, elem) {
//                    scope.safeApply(function(){
//                        scope.executeCallback();
//                    });
//                },
//                transitionEnd: function(index, elem) {}
//            });
//
//        };
//        var controller = function($scope, $element, eventBroadcast){
//            $scope.executeCallback = function(){
//
//            }
//            $scope.safeApply = function(fn) {
//                var phase = this.$root.$$phase;
//                if(phase == '$apply' || phase == '$digest')
//                    this.$eval(fn);
//                else
//                    this.$apply(fn);
//            };
//        };
//        return{
//            restrict:'E',
//            link:linker,
//            controller:controller,
//            template:'<h1>yep</h1>',
//            transclude:true
//        }
//    });
