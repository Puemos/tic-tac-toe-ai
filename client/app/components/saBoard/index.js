import angular from 'angular';
import saBoardComponent from './saBoard.component';

const saBoardModule = angular.module('saBoard.component', [])
  .component('saBoard', saBoardComponent)
  .name;

export default saBoardModule;
