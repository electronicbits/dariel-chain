const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

class ChainUtil {
    static genKeyPair() {
        var keyPair = ec.genKeyPair();
        return keyPair;
    }
}

module.exports = ChainUtil;