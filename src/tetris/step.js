const selectFigure = require('./utils/select-figure.js');
const moveFigure = require('./utils/move-figure.js');

const hasEmpty = arr => {
  return arr.some(val => {return !val;});
};

const removeLines = state => {
  let modifier = 0;
  for (let i = 0; i < state.board.length; i++) {
    if (hasEmpty(state.board[i])) continue;
    state.board.splice(i,1);
    state.board.unshift(
      Array.apply(null, Array(state.board[0].length)).map(Number.prototype.valueOf,0)
    );
    if (!modifier) modifier += 150;
    modifier *= 2;
  }
  if (modifier) state.speed = Math.max(state.speed - 20, 50);
  state.score += modifier;
};

module.exports = state => {
  if (state.running) {
    if (moveFigure(state, 0,1)) return state;
    removeLines(state);
    if (state.y < 0) state.running = false;
    selectFigure(state);
  }
  return state;
};

