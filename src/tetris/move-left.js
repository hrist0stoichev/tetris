const moveFigure = require('./utils/move-figure.js');

module.exports = state => {
  moveFigure(state, -1, 0);
  return state;
};
