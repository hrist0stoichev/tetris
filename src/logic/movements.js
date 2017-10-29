const moveFigure = require('./utils/move-figure.js');

const down = state => {
  moveFigure(state, 0, 1);
  return state;
};

const left = state => {
  moveFigure(state, -1, 0);
  return state;
};

const right = state => {
  moveFigure(state, 1, 0);
  return state;
};

module.exports = {
  down: down,
  left: left,
  right: right
}