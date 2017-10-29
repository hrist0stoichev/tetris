const React = require('react');

const COLORS = ['black', 'red', 'blue', 'green', 'purple', 'yellow'];

  const CanvasSquare = (item) => {
    let className = 'square ' + [COLORS[item.data]];
    className += item.data > 0 ? ' active' : '';
    return React.createElement('div', { className: className });
  };

module.exports = CanvasSquare;