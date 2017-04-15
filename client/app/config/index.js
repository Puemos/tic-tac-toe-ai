const mergeLocal = () => {
  try {
    return Object.assign(require('./development'), require('./local'));
  } catch (e) {
    console.warn('local config file is not exists');
    return require('./development');
  }
};

let config;

switch (process.env.NODE_ENV) {
  case 'stage':
    config = require('./stage');
    break;
  case 'production':
    config = require('./production');
    break;
  default:
    config = mergeLocal();
}

export default config;
