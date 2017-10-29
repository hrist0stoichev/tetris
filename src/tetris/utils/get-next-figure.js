const FIGURES = require('./figures.js');

module.exports = () => {
  return (Math.random()*FIGURES.length)|0;
};
