const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == undefined || date == null) return 'Unable to determine the time of year!';
 
    let a = new Date(1000, 0, 1, 0, 0, 0, 0);
    if (date.getMonth !== a.getMonth) {
      throw new Error();
    };
  
    
    let month = date.getMonth() + 1;
    switch (true) {
      case (month >= 12 || month < 3):
        return "winter";
        break;
      case (month < 6):
        return "spring";
        break;
      case (month < 9):
        return "summer";
        break;
      case (month < 12):
        return "autumn";
        break;
      
    }
  
};
