var assert = require('assert');
var colorSeed = require('../src');

const tests = [{
  value: "Paris",
  expected: "#a70b44"
},{
  value: "Marseille",
  expected: "#7acaa5"
},{
  value: "Bordeaux",
  expected: "#9ed8a4"
}];

describe('colorSeed', () => {

  describe('colorSeed.getColor : single seed', () => {
    tests.forEach(test => {
      it(`getColor("${test.value}") should return ${test.expected}`, () => {
        assert.equal(colorSeed.getColor(test.value), test.expected);
      })
    })
  })

  const arrString = arr => arr.map(v => `"${v}"`).join(', ')
  const humanArr = arr => {
    const str = arrString(arr);
    return `[${str}]`;
  }

  describe('colorSeed.getColors : multiple seed', () => {
    const values = tests.map(t=>t.value);
    const expected = tests.map(t=>t.expected);
    it(`getColors(${humanArr(values)}) should return ${expected.join(', ')}`, () => {
      assert.deepEqual(colorSeed.getColors(values), expected);
    })
    const xxxValue = '#3683bb';
    it(`getColors(${humanArr(values.concat("xxx"))}) should return ${expected.join(', ')}, ${xxxValue}`, () => {
      assert.deepEqual(colorSeed.getColors(values.concat('xxx')), expected.concat(xxxValue));
    })
  })
})
