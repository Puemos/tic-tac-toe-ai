const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const webpackHotMiddleware = require('webpack-hot-middleware');
const historyApiFallback = require('connect-history-api-fallback');

const app = express();

const { middleware, compiler } = require('./server/webpack');
const turn = require('./server/controllers/turn');

const isDeveloping = process.env.NODE_ENV !== 'production';

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/api/turn', turn);

if (isDeveloping) {
  app.use(historyApiFallback({
    verbose: false
  }));
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

  app.get('/', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });
} else {
  app.use(express.static(__dirname + '/dist'));
  app.get('/', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}
app.listen(2000, function() {
  console.log('Tic Tac Toe !!');
});
