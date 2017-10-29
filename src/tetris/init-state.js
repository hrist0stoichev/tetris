const selectFigure = require('./utils/select-figure.js');
const FIGURES = require('./utils/figures.js');

module.exports = function(height, width) {
  const state = {
    board: initBoard(height, width),
    running: true,
    score: 0,
    nextFigure: (Math.random()*FIGURES.length)|0,
    nextColor: 1,
    x: 0,
    y: 0,
    speed: 500,
    figure: undefined
  };
  selectFigure(state);
  return state;
};

const initBoard = (height, width) => {
  let board = [];
  for (let i = 0; i < height; i++) {
    board[i] = Array.apply(null, Array(width)).map(Number.prototype.valueOf,0);
  }
  return board;
};
