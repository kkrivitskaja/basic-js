const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsAmount = Math.pow(2, disksNumber) - 1;
  let secondsSum = parseInt(turnsAmount / (turnsSpeed / 3600));

  return { turns: turnsAmount, seconds: secondsSum };
};
