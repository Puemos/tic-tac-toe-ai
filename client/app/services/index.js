import angular from 'angular';

import api from './api';

const servicesModule = angular
  .module('app.services', [
    api
  ])
  .name;

export default servicesModule;
