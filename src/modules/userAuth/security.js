const auth = require('../../auth');
const TABLE = "auth";

module.exports = function validateAuth(){

    function middleware(req, res, next){
        auth.validateToken.confirmToken(req, TABLE);
        next();
    }

    return middleware
}