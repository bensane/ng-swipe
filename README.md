ng-swipe
========

AngularJS Module that enables swipejs v2.x to work using a ng-swipe directive.

-Demo included in repository.

Dependencies
============

-AngularJS 1.x.x

-bradbirdsall's Swipe http://swipejs.com

Reporting Issues
================

Issues can be reported at the Github project.

Usage
=====

ng-swipe has 3 required attributes:
-callback(fn): Function called on swipe completion.
-next: programmatically change slide.
-prev: programmatically change slide.

Implementation (Code)
---------------------

    function MainCtrl($scope){
             $scope.next = function(){
                 $scope.nextSlide();
             }
             $scope.prev = function(){
                 $scope.prevSlide();
             }

             $scope.demoCallBack = function (){
                 console.log('Swipe...');
             }
    }

HTML

    <swipe callback="demoCallBack()" next="nextSlide" prev="prevSlide">
             <div class="demo-box">
                 <h1>Slide 1</h1>
             </div>
             <div class="demo-box">
                 <h1>Slide 2</h1>
             </div>
             <div class="demo-box">
                 <h1>Slide 3</h1>
             </div>
    </swipe>

