'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:CreateCtrl
 * @description
 * # CreateCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('CreateCtrl', function ($scope, Movie) {
    $scope.create=function(){
    	$scope.movie=new Movie();
    	$scope.movie.$save();
    }
  });
