const removeFigureMutation = state => {
  for (let i = 0; i < state.figure.length; i++) {
    for (let j = 0; j < state.figure[i].length; j++) {
      const py = state.y + i;
      const px = state.x + j;
      if (px < 0 || !state.figure[i][j] || !state.board[py] || state.board[py][px] === undefined) continue;
      state.board[py][px] = 0;
    }
  }
};

module.exports = removeFigureMutation;
