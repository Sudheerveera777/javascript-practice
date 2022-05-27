Array.prototype.cMap = function (callback) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(callback(this[i], i, this));
  }
  return res;
};

let a = [1, 2, 3];
console.log(
  a.cMap((item, index, arr) => {
    return item;
  })
);

Array.prototype.cReduce = function (callback, initialVal) {
  let acc = initialVal !== undefined ? initialVal : undefined;
  for (let i = 0; i < this.length; i++) {
    if (acc !== undefined) {
      acc = callback(acc, this[i], this);
    } else {
      acc = this[i];
    }
  }
  return acc;
};

console.log(
  a.cReduce(function (acc, curr, arr) {
    return acc + curr;
  }, 1)
);
