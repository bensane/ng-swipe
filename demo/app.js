var app = angular.module('app',['bensane.ng-swipe']).
    controller('MainCtrl', function($scope){
        $scope.next = function(){
            $scope.nextSlide();
        }
        $scope.prev = function(){
            $scope.prevSlide();
        }

        $scope.demoCallBack = function (){
            console.log('Swipe...');
        }
    });


