const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == undefined || date == null) return 'Unable to determine the time of year!';
 
    let a = new Date(1000, 0, 1, 0, 0, 0, 0);
    if (date.getMonth !== a.getMonth) {
      throw new Error();
    };
     
    let month = date.getMonth()+1;
    if (month < 3 || month == 12) {
        return 'winter'
    } else if (month < 6) {
        return 'spring'
    } else if (month < 9) {
        return 'summer'
    } else {
        return 'autumn'
    }
  
};
