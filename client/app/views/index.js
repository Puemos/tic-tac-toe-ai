import angular from 'angular';
import Home from './home';


const viewsModule = angular.module('app.views', [
  Home,
])
  .name;

export default viewsModule;
