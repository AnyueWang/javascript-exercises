const add = function (a, b) {
  return a + b
};

const subtract = function (a, b) {
  return a - b
};

const sum = function (arr) {
  return arr.reduce((sum, a) => sum + a, 0)
};

const multiply = function (arr) {
  return arr.reduce((prod, a) => prod * a, 1)
};

const power = function (a, b) {
  return a ** b
};

const factorial = function (a) {
  let res = 1;
  if (a !== 0) {
    for (let i = 1; i <= a; i++) {
      res *= i;
    }
  }
  return res
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
