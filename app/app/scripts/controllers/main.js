'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('MainCtrl', function ($scope, Movie) {
    $scope.delete=function(movie){
    	movie.$delete();
    }
    $scope.movies = Movie.query();
  });
