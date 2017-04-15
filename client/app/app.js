import angular from 'angular';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';
import { name as ngStorage } from 'ngstorage';
import uiRouter from 'angular-ui-router';
import ngSanitize from 'angular-sanitize';



import Services from './services';
import Views from './views';
import Components from './components';
import AppComponent from './app.component';


angular.module('app', [
  uiRouter,
  ngAnimate,
  ngAria,
  ngMaterial,
  ngMessages,
  ngStorage,
  ngSanitize,
  Views,
  Services,
  Components
])

  .config(($locationProvider, $urlRouterProvider) => {
    "ngInject";
    $locationProvider.html5Mode(true)
      .hashPrefix('!');
    $urlRouterProvider.otherwise('/'); //home views
  })
  .config(($compileProvider) => {
    "ngInject";
    $compileProvider.debugInfoEnabled(false);
  })
  .component('app', AppComponent);
