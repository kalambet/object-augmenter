module.exports = function(base, perk) {

  // o snads for `original`
  // n stands for `new`
  function merge(o, n) {

    // If at least one of them is a simple of function type, set the new value
    if(typeof o == "number" ||
        typeof o == "string" ||
        typeof o == "function" ||
        typeof n == "number" ||
        typeof n == "string" ||
        typeof n == "function") {
      return n;
    }

    var keys = Object.keys(n);
    keys.forEach(function(currentVlue, index, array){
      if(o[currentVlue] !== undefined) {
        o[currentVlue] = merge(o[currentVlue], n[currentVlue]);
      } else {
        o[currentVlue] = n[currentVlue];
      }
    });

    return o;
  }

  return merge(base, perk);
};
