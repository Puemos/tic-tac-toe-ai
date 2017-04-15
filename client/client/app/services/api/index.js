import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ApiService from './api.service';

const apiModule = angular.module('api.service', [])
  .factory('Api', ApiService)
  .name;

export default apiModule;
