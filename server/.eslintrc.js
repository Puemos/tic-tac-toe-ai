module.exports = {
  "env": {
    "node": true,
    "mocha": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module"
  },
  "globals": {
    "sa": true,
    'Chatra': true
  },
  "rules": {
    "indent": [
      "warn", 2,
      { "SwitchCase": 1 }
    ],
    "semi": [
      "error", "always"
    ],
    "no-unused-vars": [
      "warn", {
        "vars": "local",
        "args": "after-used"
      }
    ],
    "no-console": [
      "warn", {
        allow: ["warn", "error"]
      }
    ]
  }
};