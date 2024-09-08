const auth = require('../../auth')

module.exports = function validateAuth(){

    function middleware(req, res, next){
        auth.validateToken.confirmToken(req);
        next();
    }

    return middleware
}