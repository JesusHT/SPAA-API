const auth = require('../../auth')
const TABLE = "users";

module.exports = function validateAuth(){

    function middleware(req, res, next){
        auth.validateToken.confirmToken(req, TABLE);
        next();
    }

    return middleware
}