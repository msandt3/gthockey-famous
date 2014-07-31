'use strict';

angular.module('gt-hockey-angularApp')


  .controller('MainCtrl', function ($scope, $famous) {
    var EventHandler = $famous['famous/core/EventHandler'];
    var Transitionable = $famous['famous/transitions/Transitionable'];
    var Timer = $famous['famous/utilities/Timer'];
    var Easing = $famous['famous/transitions/Easing'];

    $scope.sections = [{id:1,content:'Roster',toggled:false},
                      {id:2,content:'Schedule',toggled:false},
                      {id:3,content:'Statistics',toggled:false}];
    $scope.menuEventHandler = new EventHandler();
    $scope.width = 750;

    $scope.sizes = {
      1: new Transitionable([$scope.width,50,0]),
      2: new Transitionable([$scope.width,50,0]),
      3: new Transitionable([$scope.width,50,0])
    }

    $scope.translates = {
      1: new Transitionable([0, 0, 0]),
      2: new Transitionable([0, 75, 0]),
      3: new Transitionable([0, 150, 0])
    }

    // eventHandlerA emits 'myEvent' on click
    $scope.surfaceClick = function() {
      console.log('Click');
      $scope.eventHandlerA.emit('myEvent');
    };

    $scope.sectionClick = function(id){
      if(id === 1){
        $scope.rosterClick();
      }else if(id === 2){
        $scope.scheduleClick();
      }else if(id === 3){
        $scope.statisticsClick();
      }
    };

    $scope.rosterClick = function(){
      if(!$scope.sections[0].toggled){
        $scope.sizes[1].set([$scope.width,400,0],{duration:2000,curve:'easeInOut'});
        $scope.translates[2].set([0,400,0], {duration:2000,curve: 'easeInOut'});
        $scope.translates[3].set([0,475,0], {duration:2000,curve: 'easeInOut'});
      }else{
        $scope.sizes[1].set([$scope.width,50,0],{duration:2000,curve:'easeInOut'});
        $scope.translates[2].set([0,75,0], {duration:2000,curve: 'easeInOut'});
        $scope.translates[3].set([0,150,0], {duration:2000,curve: 'easeInOut'});
      }

      $scope.sections[0].toggled = !$scope.sections[0].toggled;
    }

    $scope.scheduleClick = function(){
      if(!$scope.sections[1].toggled){
        $scope.translates[1].set([0,-45,0],{duration:2000,curve:'easeInOut'});
        $scope.sizes[2].set([$scope.width,400,0],{duration:2000,curve:'easeInOut'});
        $scope.translates[3].set([0,475,0], {duration:2000,curve: 'easeInOut'});
      }else{
        $scope.translates[1].set([0,0,0],{duration:2000,curve:'easeInOut'});
        $scope.sizes[2].set([$scope.width,50,0],{duration:2000, curve:'easeInOut'});
        $scope.translates[3].set([0,150,0], {duration:2000, curve: 'easeInOut'});
      }

      $scope.sections[1].toggled = !$scope.sections[1].toggled;
    }

    $scope.statisticsClick = function(){
      if(!$scope.sections[2].toggled){
        $scope.translates[1].set([0,-45,0],{duration:2000,curve:'easeInOut'});
        $scope.translates[2].set([0,30,0], {duration:2000,curve: 'easeInOut'});
        $scope.sizes[3].set([$scope.width,400,0],{duration:2000,curve:'easeInOut'});
        
      }else{
        $scope.translates[1].set([0,0,0],{duration:2000,curve:'easeInOut'});
        $scope.translates[2].set([0,75,0], {duration:2000,curve: 'easeInOut'});
        $scope.sizes[3].set([$scope.width,50,0],{duration:2000,curve:'easeInOut'});
      }

      $scope.sections[2].toggled = !$scope.sections[2].toggled;
    }

    $scope.fuckYou = function(){

    }



  });
