const ChainUtil = require('../../chain-utils');
const { INITIAL_BALANCE } = require('../../config');

class Wallet {
    constructor() {
        this.balance = INITIAL_BALANCE;
        console.log('here');
        this.keyPair = ChainUtil.genKeyPair();
        console.log(this.keyPair);
        this.publicKey = this.keyPair.getPublic().encode('hex');
    }

    toString() {
        return `Wallet - 
        publicKey   : ${this.publicKey.toString()}
        balance     : ${this.balance}     
        `
    }
}

module.exports = Wallet;