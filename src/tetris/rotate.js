const addFigureMutation = require('./utils/add-figure-mutation.js');
const removeFigureMutation = require('./utils/remove-figure-mutation.js');

const rotateFigureMutation = (state, dir) => {
  let result = [];
  for (let i = 0; i < state.figure.length; i++) {
    for (let j = 0; j < state.figure[i].length; j++) {
      const y = dir === 1 ? j : state.figure.length - j - 1;
      const x = dir === 1 ? state.figure.length - 1 - i : i;
      result[y] = result[y] || [];
      result[y][x] = state.figure[i][j];
    }
  }
  state.figure = result;
};

const rotateFigure = (state, dir) => {
  removeFigureMutation(state);
  rotateFigureMutation(state, dir);
  if (addFigureMutation(state)) return true;
  rotateFigureMutation(state, -dir);
  addFigureMutation(state);
};

module.exports = state => {
  rotateFigure(state, 1);
  return state;
};
