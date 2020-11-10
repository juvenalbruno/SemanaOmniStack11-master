const crypto = require ('crypto')

module.exports = function gerenrateUniqueId(){
    return crypto.randomBytes(4).toString('HEX');
}