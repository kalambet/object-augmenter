var augment = require("./main"),
  assert = require('assert');

describe('Simple merge', function() {
  it('should return {a: 3, b: 2, c: 3} when the value {a: 2, b: 2} and {a: 3, c: 3}', function () {
    var obj1 = {a: 2, b: 2};
    var obj2 = {a: 3, c: 3};
    var res = augment(obj1, obj2);
    assert.strictEqual(res.a, 3);
    assert.strictEqual(res.b, 2);
    assert.strictEqual(res.c, 3);
  });
});

describe('Comnplex merge', function() {
  it('should return {a: {c: 3, d: 3}, b: "obj2", c: {a: {a: 5}, b: 1}, d: {a: 2, b: 3}, e: 7}', function () {
    var obj1 = {a: 1, b: "obj1", c: {a: {a: 3}, b: 1}, d: {a: 2}, e: {a: 9}};
    var obj2 = {a: {c: 3, d: 3}, b: "obj2", c: {a: {a: 5}}, d: {b: 3}, e: 7};
    var res = augment(obj1, obj2);

    assert.strictEqual(res.a.c, 3);
    assert.strictEqual(res.a.d, 3);
    assert.strictEqual(res.b, "obj2");
    assert.strictEqual(res.c.a.a, 5);
    assert.strictEqual(res.c.b, 1);
    assert.strictEqual(res.d.a, 2);
    assert.strictEqual(res.d.b, 3);
    assert.strictEqual(res.e, 7);
  });
});

describe('Check for augmenter "undefined" merge', function() {
  it('should return {a: 1, b: "obj1", c: 1} with values are {a: 1, b: "obj1", c: 1} and undefined', function () {
    var obj1 = {a: 1, b: "obj1", c: 1};
    var res = augment(obj1, undefined);

    assert.strictEqual(res.a, 1);
    assert.strictEqual(res.b, "obj1");
    assert.strictEqual(res.c, 1);
  });
});

describe('Check for source "undefined" merge', function() {
  it('should return {a: 2, b: "obj2", c:2} with values are undefined and {a: 2, b: "obj2", c:2}', function () {
    var obj2 = {a: 2, b: "obj2", c:2};
    var res = augment(undefined, obj2);

    assert.strictEqual(res.a, 2);
    assert.strictEqual(res.b, "obj2");
    assert.strictEqual(res.c, 2);
  });
});

describe('Check for both "undefined" merge', function() {
  it('should return {a: 1, b: "obj1", c: 1}', function () {
    var res = augment(undefined, undefined);

    assert.strictEqual(res, undefined);
  });
});
