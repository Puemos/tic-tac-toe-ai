const R = require('ramda');
const {
  WIN_COLS_POS,
  WIN_ROWS_POS,
  WIN_DIA_POS
} = require('../consts');
const State = require('./State');

const n_in_a_row = (board, player) => positions => {
  const result = board
    .filter(cell => positions.includes(cell.pos))
    .reduce((prev, curr) => {
      return prev + (curr.player === player ? 1 : 0);
    }, 0);
  return result === 3;
};

module.exports = class Game {

  constructor(ai, human) {
    this.ai = ai;
    this.human = human;
    this.initial = new State(this.human);
  }

  to_move(state) {
    return state.turn === this.ai ? this.human : this.ai;
  }
  make_move(pos, state) {
    const board = state.board.filter(cell => cell.pos !== pos);
    const player = state.turn;
    board.push({ pos, player });
    const turn = this.to_move(state);
    const utility = this.compute_utility(state, pos, player);
    return new State(turn, board, utility);
  }
  utility(state) {
    return state.utility;
  }
  terminal_test(state) {
    return (state.utility !== 0 || this.legal_moves(state).length === 0);
  }
  legal_moves(state) {
    return state
      .empty_cells()
      .map(R.prop('pos'));
  }

  compute_utility(state, pos, player) {
    const win_pos = [...WIN_COLS_POS, ...WIN_ROWS_POS, ...WIN_DIA_POS];
    if (win_pos.map(n_in_a_row(state.board, player)).some(i => i)) {
      return player === this.ai ? 1 : -1;
    } else {
      return 0;
    }
  }

  successors(state) {
    return this
      .legal_moves(state)
      .map(pos => {
        return ({ state: this.make_move(pos, state), pos: pos });
      });
  }

};
