/**
 * Created by pi on 6/21/14.
 */
var crypto = require('crypto');

hashPassword = function(salt,pwd){
    var hmac = crypto.createHmac('sha1',salt);
    return hmac.update(pwd).digest('hex');
}
exports.createSalt = function (){
    return crypto.randomBytes(128).toString('base64');
}
exports.hashPwd = hashPassword;
exports.authenticate = function(salt,pwd,dbpwd){
    return hashPassword(salt,pwd)===dbpwd;
}