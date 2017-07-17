# color-seed

[![npm package][npm-badge]][npm]

Predictable colors generator from given seed.

Based on [seedrandom](https://github.com/davidbau/seedrandom) and [nice-color-palettes](https://github.com/Jam3/nice-color-palettes).

## Install

`npm install color-seed`


## Usage

```js

var getColor = require('color-seed');

console.log(getColor('Paris')); // always #c8c8a9

console.log(getColor('Bordeaux')); // always #535233

console.log(getColor('Marseille')); // always #9dc9ac

```

[npm-badge]: https://img.shields.io/npm/v/color-seed.png?style=flat-square
[npm]: https://www.npmjs.org/package/color-seed