import angular from 'angular';

import api from './api';
import ai from './ai';

const servicesModule = angular
  .module('app.services', [
    api,
    ai
  ])
  .name;

export default servicesModule;
