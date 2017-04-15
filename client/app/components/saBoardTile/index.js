import angular from 'angular';
import saBoardTileComponent from './saBoardTile.component';

const saBoardTileModule = angular.module('saBoardTile.component', [])
  .component('saBoardTile', saBoardTileComponent)
  .name;

export default saBoardTileModule;
