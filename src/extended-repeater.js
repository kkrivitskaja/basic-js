const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    str = String(str);

    let repeatTimes, separator, addition, additionRepeatTimes, additionSeparator;

    options.repeatTimes === undefined ? repeatTimes = 1 : repeatTimes = options.repeatTimes;

    separator = options.separator || '+';

    options.addition === undefined ? addition = '' : addition = String(options.addition);

    options.additionRepeatTimes === undefined ? additionRepeatTimes = 1 : additionRepeatTimes = options.additionRepeatTimes;

  additionSeparator = options.additionSeparator || '|';
   let additionStr = ([].concat(...Array(Number.parseInt(options["additionRepeatTimes"])).fill(options["addition"].toString())).join(options["additionSeparator"].toString()));

    let array = [].concat(...Array(Number.parseInt(options["repeatTimes"])).fill(str.toString() + additionStr));

    return array.join(options["separator"].toString());
};