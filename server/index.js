const { PLAYER_1, PLAYER_2 } = require('./consts');
const Game = require('./models/Game');
const search = require('./algo/search');

const game = new Game(PLAYER_1, PLAYER_2);

const print = board => {
  const get_pos = pos => board.find(cell => cell.pos === pos).player;
  console.log();
  console.log(get_pos(0), get_pos(1), get_pos(2));
  console.log(get_pos(3), get_pos(4), get_pos(5));
  console.log(get_pos(6), get_pos(7), get_pos(8));
  console.log();

};

let state = game.initial;
let move;

state = game.make_move(4, state);

move = search(game, state);
console.log(move);

state = game.make_move(move, state);

move = search(game, state);
console.log(move);

state = game.make_move(5, state);

move = search(game, state);
console.log(move);

state = game.make_move(move, state);

move = search(game, state);
console.log(move);

state = game.make_move(2, state);

move = search(game, state);
console.log(move);

state = game.make_move(move, state);

move = search(game, state);
console.log(move);

state = game.make_move(move, state);

move = search(game, state);
console.log(move);

state = game.make_move(move, state);

move = search(game, state);
console.log(move);

state = game.make_move(move, state);
print(state.board)

process.exit(0);
