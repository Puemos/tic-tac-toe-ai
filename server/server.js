const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const { PLAYER_1, PLAYER_2 } = require('./consts');
const Game = require('./models/Game');
const State = require('./models/State');
const search = require('./algo/search');

const game = new Game(PLAYER_1, PLAYER_2);


app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Hello World!');
});
app.post('/turn', function(req, res) {
  const { state: raw_state, move } = req.body;
  const new_state = game.make_move(Number(move), new State(raw_state.turn, raw_state.board, raw_state.utility));
  const ai_move = search(game, new_state);
  const after_state = game.make_move(ai_move, new_state);
  res.send(after_state);
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
