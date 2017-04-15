class SaBoardTileController {
  constructor() {
    "ngInject";
    this.name = 'saBoardTile';

  }
  onClick() {
    this.tileClick({ pos: this.pos });
  }
}

export default SaBoardTileController;
