const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(membersTeam) {
  if (!Array.isArray(membersTeam) || membersTeam.length == 0) return false
  let dreamArr = [];
  membersTeam.forEach(element => {
    if (typeof element == typeof 'string') {
      dreamArr.push(element.trim()[0].toUpperCase())
    } 
  });
     return dreamArr.sort().join('');
  
};

