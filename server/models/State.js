const R = require('ramda');
const {
  EMPTY
} = require('../consts');

const EMPTY_BOARD = Array(9).fill().map((val, idx) => ({ pos: idx, player: EMPTY }));

module.exports = class State {

  constructor(turn, board = EMPTY_BOARD, utility = 0) {
    this.turn = R.clone(turn);
    this.board = [...board];
    this.utility = utility;
  }
  empty_cells() {
    return this.board
      .filter(R.propEq('player', EMPTY));
  }

};
