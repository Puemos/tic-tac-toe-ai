const {
  PLAYER_HUMAN,
  PLAYER_AI
} = require('./../consts');
const Game = require('./../models/Game');
const State = require('./../models/State');
const search = require('./../algo/search');
const IllegalMoveError = require('../Errors/IllegalMoveError');

const tic_tac_toe = new Game(PLAYER_AI, PLAYER_HUMAN);

function handler(req, res) {
  const {
    state: raw_state,
    move
  } = req.body;
  const state = new State(raw_state.turn, raw_state.board, raw_state.utility);
  let new_state;
  try {
    new_state = tic_tac_toe.make_move(state, Number(move));
  } catch (error) {
    return error instanceof IllegalMoveError ? res.json(state) : res.status(500).send(error);
  }
  if (new_state.utility !== 0) {
    return res.json(new_state);
  }
  const ai_move = search(tic_tac_toe, new_state);
  if (ai_move === null) {
    return res.json(new_state);
  }
  const after_state = tic_tac_toe.make_move(new_state, ai_move);
  return res.send(after_state);

}

module.exports = handler;
