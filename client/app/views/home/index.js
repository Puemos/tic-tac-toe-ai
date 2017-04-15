import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

const homeModule = angular.module('home.view', [uiRouter])
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('home', {
        url: '/',
        component: 'home',
        resolve: {}
      });
  })
  .component('home', homeComponent)
  .name;

export default homeModule;
