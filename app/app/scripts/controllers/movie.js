'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('MovieCtrl', function ($scope, $routeParams, Movie) {
  	var id=$routeParams.id;
    $scope.update=function(){

    }

    $scope.movie=Movie.get({id:id});
  });
