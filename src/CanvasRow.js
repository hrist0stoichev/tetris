const CanvasSquare = require('./CanvasSquare');
const React = require('react');

  const CanvasRow = (item) =>{
    const squares = item.row.map(function(block, i) {
      return CanvasSquare({ key: i, data: block });
    });
    return React.createElement('div', { className: 'board-row' }, squares);
  };

module.exports = CanvasRow;