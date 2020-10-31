const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    
      
    return 1 + ((Array.isArray(arr)) ? arr.reduce((accumulator, currentValue) => Math.max(this.calculateDepth(currentValue), accumulator), 0)
  : -1);
  }
};