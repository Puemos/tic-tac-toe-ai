import { TILES } from '../constants/tiles';

const initialState = {
  turn: 'X',
  board: [
    { pos: 0, player: 'E' },
    { pos: 1, player: 'E' },
    { pos: 2, player: 'E' },
    { pos: 3, player: 'E' },
    { pos: 4, player: 'E' },
    { pos: 5, player: 'E' },
    { pos: 6, player: 'E' },
    { pos: 7, player: 'E' },
    { pos: 8, player: 'E' }
  ],
  utility: 0
};

export function GameReducer(state = initialState, action) {
  switch (action.type) {
    case TILES.CHOOSE_POSTION:
      const board = state.board.filter(cell => cell.pos !== action.payload);
      board.push({ pos: action.payload, player: 'X' });
      return Object.assign({}, state, { board });

    default:
      return state;
  }
}
