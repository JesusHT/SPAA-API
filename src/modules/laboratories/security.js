const auth  = require('../../auth');
const TABLE = "modules";

module.exports = function validateAuth() {
    return async function middleware(req, res, next) {
        try {
            await auth.validateToken.confirmToken(req, TABLE);
            next();
        } catch (error) {
            next(error);
        }
    };
}
