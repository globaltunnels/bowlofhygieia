'use strict';

/**
 * @ngdoc overview
 * @name adsGtApp
 * @description
 * # adsGtApp
 *
 * Main module of the application.
 */
angular
  .module('adsGtApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'nvd3'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/drug.html',
        controller: 'DrugCtrl'
      })
//      .when('/drug', {
//        templateUrl: 'views/drug.html',
//        controller: 'DrugCtrl'
//      })
//      .when('/about', {
//        templateUrl: 'views/about.html',
//        controller: 'AboutCtrl'
//      })
      .otherwise({
        redirectTo: '/'
      });
  });

var fdaRootUrl="https://api.fda.gov";
angular
  .module('adsGtApp').constant('FDA_API', {
      'drugEvent':   fdaRootUrl+'/drug/event.json',
      "drugLabel":   fdaRootUrl+'/drug/label.json'
 });

