import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AiService from './ai.service';

const aiModule = angular.module('ai.service', [])
  .factory('Ai', AiService)
  .name;

export default aiModule;
