import template from './saBoardTile.html';
import controller from './saBoardTile.controller';
import './saBoardTile.scss';

const saBoardTileComponent = {
  restrict: 'E',
  bindings: {
    pos: '<',
    player: '<',
    tileClick: '&'
  },
  template,
  controller,
};

export default saBoardTileComponent;
