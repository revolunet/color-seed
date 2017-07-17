var seedrandom = require('seedrandom');
var chroma = require("chroma-js")


const getPredictibleRandom = seed => {
  Math.seedrandom(seed);
  return Math.random();
}

const DEFAULT_SCALE = chroma.scale('Spectral')

const getColor = (seed) => DEFAULT_SCALE(getPredictibleRandom(seed)).hex()

const getColors = seeds => seeds.map(r => getColor(r));


module.exports = {
  default: getColor,
  getColor,
  getColors
}