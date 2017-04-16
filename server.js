const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const webpackHotMiddleware = require('webpack-hot-middleware');
const historyApiFallback = require('connect-history-api-fallback');
const { create_middleware, create_compiler } = require('./server/webpack');

const app = express();

const turn = require('./server/controllers/turn');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 2000 : process.env.PORT || 8080;
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
  const compiler = create_compiler();
  const middleware = create_middleware(compiler);
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
app.listen(port, function() {});
