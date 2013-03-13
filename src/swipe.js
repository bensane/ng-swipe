angular.module('ng-swipe', []).directive('ngSwipe', function() {
        var linker = function(scope, element, attrs){
            window.mySwipe = new Swipe(document.getElementById('slider'), {
            startSlide: 0,
            speed: 400,
            auto: false,
            continuous: true,
            disableScroll: false,
            stopPropagation: false,
            callback: function(index, elem) {
                scope.swipe(index);
            },
            transitionEnd: function(index, elem) {}
            });

        };
        var html = '<div id='slider' class='swipe'>
                        <div class='swipe-wrap' ng-transclude>
                        </div>
                    </div>';
        var controller = function($scope, $element){}
        };
        return{
        restrict:'E',
        link:linker,
        controller:controller,
        template:'',
        transclude:true
        }  
});