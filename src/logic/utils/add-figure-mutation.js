const addFigureMutation = (state, draw) => {
  const width = state.board[0].length;
  for (let i = 0; i < state.figure.length; i++) {
    for (let j = 0; j < state.figure[i].length; j++) {
      const py = state.y + i;
      const px = state.x + j;
      if (state.figure[i][j] && (px < 0 || px >= width)) return false;
      if (py < 0 || !state.figure[i][j]) continue;
      if (!state.board[py] || state.board[py][px] || state.board[py][px] === undefined) return false;
      if (!draw) continue;
      state.board[py][px] = state.figure[i][j] || state.board[py][px];
    }
  }
  return draw ? true : addFigureMutation(state, true);
};

module.exports = addFigureMutation;
