class SaBoardTileController {
  constructor() {
    "ngInject";
    this.name = 'saBoardTile';

  }
  $onChange(changes) {
    this.clicked = false;
  }
  onClick() {
    if (this.player !== 'E' || this.disable) {
      return null;
    }
    this.clicked = true;
    this.tileClick({ pos: this.pos });
  }
}

export default SaBoardTileController;
