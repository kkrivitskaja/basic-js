const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if (!Array.isArray(matrix) || matrix.length == 0) return 0
  let cat = matrix.reduce((a, b) => a.concat(b), []);
  return cat.filter(elem => elem === '^^').length;
};


