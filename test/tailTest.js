const assert = require('chai').assert;
const tail   = require('../tail');


describe("#tail", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.deepEqual(tail(['5']), '5');
  });
});
