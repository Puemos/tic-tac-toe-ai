import angular from 'angular';
import uiRouter from 'angular-ui-router';
import <%= name %>Component from './<%= name %>.component';

const <%= name %>Module = angular.module('<%= name %>.view', [
    uiRouter
  ])
  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $stateProvider
      .state('<%= name %>', {
        url: '/<%= name %>',
        component: '<%= name %>',
      });
  })
  .component('<%= name %>', <%= name %>Component)
  .name;

export default <%= name %>Module;
