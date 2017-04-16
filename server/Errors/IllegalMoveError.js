module.exports = class IllegalMoveError extends Error {
  constructor(message) {
    super(message);
  }
};
