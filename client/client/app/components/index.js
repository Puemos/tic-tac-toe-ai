import angular from 'angular';


import loading from './loading';
import saBoard from './saBoard';
import saBoardTile from './saBoardTile';
import backdrop from './backdrop';

const commonModuleName = angular.module('app.common', [
  loading,
  saBoard,
  saBoardTile,
  backdrop,
])
  .name;

export default commonModuleName;
