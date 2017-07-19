var seedrandom = require('seedrandom');
var chroma = require("chroma-js")


function getPredictibleRandom(seed) {
  Math.seedrandom(seed);
  return Math.random();
}

const DEFAULT_SCALE = chroma.scale('Spectral')

function getColor(seed){
  return DEFAULT_SCALE(getPredictibleRandom(seed)).hex()
}

function getColors(seeds) {
  return seeds.map(getColor);
}


module.exports = {
  default: getColor,
  getColor,
  getColors
}