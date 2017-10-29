const FIGURES = require('./figures.js');
const getNextFigure = require('./get-next-figure.js');

const allEmpty = arr => {
  return !arr.some(val => {
    return val;
  });
};

const selectFigure = state => {
  state.figure = FIGURES[state.nextFigure];
  state.nextFigure = getNextFigure();
  for (let i = 0; i < state.figure.length; i++) {
    for (let j = 0; j < state.figure.length; j++) {
      state.figure[i][j] = state.figure[i][j] && state.nextColor;
    }
  }
  state.nextColor = 1+((Math.random()*5)|0);
  state.y = -state.figure.length;
  state.x = ((state.board[0].length / 2) - (state.figure.length / 2)) | 0;
  let btm = state.figure.length-1;
  while (allEmpty(state.figure[btm])) {
    state.y++;
    btm--;
  }
};

module.exports = selectFigure;
