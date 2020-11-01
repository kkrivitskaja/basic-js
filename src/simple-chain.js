const CustomError = require("../extensions/custom-error");

const chainMaker = {
    arrChain: [],
    getLength() {
        return this.arrChain.length;
    },
    addLink(value) {
        this.arrChain.push(value);
        return this;
    },
    removeLink(position) {
        if (!Number.isInteger(position) || position - 1 < 0 || position > this.arrChain.length) {
            this.arrChain = []
            throw new Error();
        } else {
            this.arrChain.splice(position - 1, 1);
            return this;
        }
    },
    reverseChain() {
        this.arrChain.reverse();
        return this;
    },
    finishChain() {
        const resalt = '( ' + this.arrChain.map((item) => '' + item).join(' )~~( ') + ' )';
        this.arrChain.length = 0;
        return resalt;
    },
};

module.exports = chainMaker;