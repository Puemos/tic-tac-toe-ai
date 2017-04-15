import angular from 'angular';
import uiRouter from 'angular-ui-router';
import <%= upCaseName %>Service from './<%= name %>.service';

const <%= name %>Module = angular.module('<%= name %>.service', [])
  .factory('<%= upCaseName %>', <%= upCaseName %>Service)
  .name;

export default <%= name %>Module;
