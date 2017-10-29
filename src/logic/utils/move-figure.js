const addFigureMutation = require('./add-figure-mutation.js');
const removeFigureMutation = require('./remove-figure-mutation.js');

const moveFigure = (state, dx, dy) => {
  removeFigureMutation(state);
  state.x += dx;
  state.y += dy;
  if (addFigureMutation(state)) return true;
  state.x -= dx;
  state.y -= dy;
  addFigureMutation(state);
  return false;
};

module.exports = moveFigure;
