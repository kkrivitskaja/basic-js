const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    str = String(str);
    let repeatTimes, separator, addition, additionRepeatTimes, additionSeparator;
    options.repeatTimes === undefined ? repeatTimes = 1 : repeatTimes = options.repeatTimes;
    options.addition === undefined ? addition = '' : addition = String(options.addition);
    separator = options.separator || '+';
    options.additionRepeatTimes === undefined ? additionRepeatTimes = 1 : additionRepeatTimes = options.additionRepeatTimes;
    additionSeparator = options.additionSeparator || '|';
    let newStr = ([].concat(...Array(Number.parseInt(additionRepeatTimes)).fill(addition.toString())).join(additionSeparator.toString()));
    let array = [].concat(...Array(Number.parseInt(repeatTimes)).fill(str.toString() + newStr));
    return array.join(separator.toString());
};