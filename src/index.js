var seedrandom = require('seedrandom');

var colors = require('nice-color-palettes').reduce((a, c) => {
  a.push(...c)
  return a
}, [])

const getRandomColor = seed => {
  Math.seedrandom(seed);
  const random = Math.random();
  const color = colors[Math.floor(random * colors.length)]
  return color;
}

module.exports = getRandomColor