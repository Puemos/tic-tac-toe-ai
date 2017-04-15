import angular from 'angular';
import <%= name %>Component from './<%= name %>.component';

const <%= name %>Module = angular.module('<%= name %>.component', [])
  .component('<%= name %>', <%= name %>Component)
  .name;

export default <%= name %>Module;
