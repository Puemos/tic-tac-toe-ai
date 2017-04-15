const R = require('ramda');

class SaBoardController {
  constructor(Ai) {
    "ngInject";
    this.name = 'saBoard';
    this.Ai = Ai;
  }
  $onInit() {
    this.restart();
  }
  tileClick(pos) {
    if (this.fetching) { return null; }
    this.fetching = true;
    this.Ai.move(pos, this.curr_state)
      .then(state => {
        state.board.sort((a, b) => a.pos - b.pos);
        this.curr_state = state;
        this.moves = this.count_moves(this.curr_state);
        this.finished = this.curr_state.utility !== 0 || this.moves === 0;
        this.fetching = false;
      });
  }
  restart() {
    this.curr_state = R.clone(this.state);
    this.finished = false;
  }
  count_moves(state) {
    return state.board.filter(cell => cell.player === 'E').length;
  }

}

export default SaBoardController;
