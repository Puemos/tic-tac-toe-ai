const {
  PLAYER_1,
  PLAYER_2,
  ILLEGAL_MOVE
} = require('./../consts');
const Game = require('./../models/Game');
const State = require('./../models/State');
const search = require('./../algo/search');

const game = new Game(PLAYER_2, PLAYER_1);

function handler(req, res) {
  const {
    state: raw_state,
    move
  } = req.body;
  const state = new State(raw_state.turn, raw_state.board, raw_state.utility);
  try {
    const new_state = game.make_move(state, Number(move));
    const ai_move = search(game, new_state);
    if (ai_move === null) {
      return res.json(new_state);
    }
    const after_state = game.make_move(new_state, ai_move);
    return res.send(after_state);

  } catch (error) {
    return error.message === ILLEGAL_MOVE ? res.json(state) : res.status(500).send(error);
  }
}

module.exports = handler;
