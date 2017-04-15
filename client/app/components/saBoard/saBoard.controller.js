class SaBoardController {
  constructor(Ai) {
    "ngInject";
    this.name = 'saBoard';
    this.Ai = Ai;

  }
  tileClick(pos) {
    this.Ai.move(pos, this.state)
      .then(state => {
        state.board.sort((a, b) => a.pos - b.pos);
        this.state = state;
      });
  }

}

export default SaBoardController;
