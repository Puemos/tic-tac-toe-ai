import angular from 'angular';
import loadingComponent from './loading.component';

const loadingModule = angular.module('loading.component',[])
  .component('loading', loadingComponent)
  .name;

export default loadingModule;
