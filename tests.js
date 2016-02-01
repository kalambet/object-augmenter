var augment = require("./main"),
  util = require("util"),
  assert = require('assert');

describe('TEST: Simple merge', function() {
  it('should return {a: 3, b: 2, c: 3} when the value {a: 2, b: 2} and {a: 3, c: 3}', function () {
    var obj1 = {a: 2, b: 2};
    console.log("\nObject 1: \n" + util.inspect(obj1));

    var obj2 = {a: 3, c: 3};
    console.log("\nObject 2: \n" + util.inspect(obj2));

    var res = augment(obj1, obj2);
    console.log("\nResults: \n" + util.inspect(res));

    assert.strictEqual(res.a, 3);
    assert.strictEqual(res.b, 2);
    assert.strictEqual(res.c, 3);
  });
});

describe('TEST: Function merge', function() {
  it('should return {a: 2, b: 3, c: 3} when the value {a: 2, b: function(){return 1;}, c: 3} and {b: 3, c: 3}', function () {
    var obj1 = {a: 2, b: function(){return 1;}};
    console.log("\nObject 1: \n" + util.inspect(obj1));

    var obj2 = {b: {a: 3}, c: 3};
    console.log("\nObject 2: \n" + util.inspect(obj2));

    var res = augment(obj1, obj2);
    console.log("\nResults: \n" + util.inspect(res));

    assert.notEqual(typeof res.b, "function");
  });
});


describe('TEST: Comnplex merge', function() {
  it('should return {a: {c: 3, d: 3}, b: "obj2", c: {a: {a: false}, b: 1}, d: {a: 2, b: 3}, e: 7}', function () {
    var obj1 = {a: 1, b: "obj1", c: {a: {a: true}, b: 1}, d: {a: 2}, e: {a: 9}};
    console.log("\nObject 1: \n" + util.inspect(obj1));

    var obj2 = {a: {c: 3, d: 3}, b: "obj2", c: {a: {a: false}}, d: {b: 3}, e: 7};
    console.log("\nObject 2: \n" + util.inspect(obj2));

    var res = augment(obj1, obj2);
    console.log("\nResults: \n" + util.inspect(res));

    assert.strictEqual(res.a.c, 3);
    assert.strictEqual(res.a.d, 3);
    assert.strictEqual(res.b, "obj2");
    assert.strictEqual(res.c.a.a, false);
    assert.strictEqual(res.c.b, 1);
    assert.strictEqual(res.d.a, 2);
    assert.strictEqual(res.d.b, 3);
    assert.strictEqual(res.e, 7);
  });
});

describe('TEST: Check for augmenter "undefined" merge', function() {
  it('should return {a: 1, b: "obj1", c: 1} with values are {a: 1, b: "obj1", c: 1} and undefined', function () {
    var obj1 = {a: 1, b: "obj1", c: 1};
    console.log("\nObject 1: \n" + util.inspect(obj1));

    var res = augment(obj1, undefined);
    console.log("\nResults: \n" + util.inspect(res));

    assert.strictEqual(res.a, 1);
    assert.strictEqual(res.b, "obj1");
    assert.strictEqual(res.c, 1);
  });
});

describe('TEST: Check for source "undefined" merge', function() {
  it('should return {a: 2, b: "obj2", c:2} with values are undefined and {a: 2, b: "obj2", c:2}', function () {
    var obj2 = {a: 2, b: "obj2", c:2};
    console.log("\nObject 2: \n" + util.inspect(obj2));

    var res = augment(undefined, obj2);
    console.log("\nResults: \n" + util.inspect(res));

    assert.strictEqual(res.a, 2);
    assert.strictEqual(res.b, "obj2");
    assert.strictEqual(res.c, 2);
  });
});

describe('TEST: Check for both "undefined" merge', function() {
  it('should return {a: 1, b: "obj1", c: 1}', function () {
    var res = augment(undefined, undefined);
    console.log("\nResults: \n" + util.inspect(res));

    assert.strictEqual(res, undefined);
  });
});
