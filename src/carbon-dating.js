const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || Number.isNaN(parseFloat(sampleActivity))|| sampleActivity<=0|| sampleActivity >15) { return false }
  else{
  let ageOfExampl = Math.log10(MODERN_ACTIVITY / parseFloat(sampleActivity)) / 0.693 * HALF_LIFE_PERIOD;
   return ageOfExampl }
};
