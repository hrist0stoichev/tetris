const moveFigure = require('./utils/move-figure.js');

module.exports = state => {
  moveFigure(state, 0, 1);
  return state;
};

