const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const turn = require('./controllers/turn');


app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/api/turn', turn);

app.listen(2000, function () {
  console.log('Tic Tac Toe !!');
});