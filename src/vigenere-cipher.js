const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
   constructor(type = true) {
        this.typeEncr= type;
    }

    encrypt(string, key) {
        this.checkValues(string, key);
        let message = "";
        let keyEl = 0,
            stringEl = 0;
        string = string.toString().toUpperCase();
        key = key.toString().toUpperCase().replace(/[^A-Z]/g, '');

        while (stringEl < string.length) {
            keyEl = 0;
            while (keyEl < key.length && stringEl < string.length) {
                if (string[stringEl] >= 'A' && string[stringEl] <= 'Z') {
                    let tmp = (key.charCodeAt(keyEl) + string.charCodeAt(stringEl)) % 26
                    message += String.fromCharCode(tmp + 65);
                    keyEl++;
                } else {
                    message += string[stringEl];
                }
                stringEl++;
            }
        }
        return this.formatOutput(message);
    }
    decrypt(string, key) {
        this.checkValues(string, key);
        let message = "";
        let keyEl = 0,
            stringEl = 0;
        string = string.toString().toUpperCase();
        key = key.toString().toUpperCase().replace(/[^A-Z]/g, '');

        while (stringEl < string.length) {
            keyEl = 0;
            while (stringEl < string.length&&keyEl < key.length ) {
                if (string[stringEl] >= 'A' && string[stringEl] <= 'Z') {
                    let tmp = (-key.charCodeAt(keyEl) + string.charCodeAt(stringEl) + 26) % 26
                    message += String.fromCharCode(tmp + 65);
                    keyEl++;
                } else {
                    message += string[stringEl];
                }
                stringEl++;
            }
        }
        return this.formatOutput(message);
    }
    checkValues(string, key) {
        if (string === undefined || key === null || key === undefined || string === null) throw new Error();
    }
  formatOutput(message) {
    if (this.typeEncr) {
        return message 
    } else {
      return message.split('').reverse().join('')
      }
        
    }
}






module.exports = VigenereCipheringMachine;
