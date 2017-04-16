import angular from 'angular';
import uiRouter from 'angular-ui-router';
import backdropComponent from './backdrop.component';

const backdropModule = angular.module('backdrop.component', [
    uiRouter
  ])
  .component('backdrop', backdropComponent)
  .name;

export default backdropModule;
