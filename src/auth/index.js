const fetch = require('node-fetch');
const { decodeHeader } = require('./authToken');
const { canPerformAction, determineAction } = require('./authPermissions');
const error = require('../middleware/errors');
const MESSAGES = require('../classes/messages');

const validateToken = {
    /**
     * Validates the token from the request and checks if the user's role has the necessary permission 
     * to perform the action on the specified resource (table).
     *
     * @async
     * @function confirmToken
     * @param {Object} req - The HTTP request object, which contains headers and cookies to extract the token.
     * @param {string} table - The name of the resource (table) the user is attempting to access.
     * @throws {Error} Will throw an error if the token is missing, invalid, or the user does not have permission.
     * @returns {Promise<void>} Resolves if validation passes, throws an error otherwise.
     */
    confirmToken: async function(req, table) {
        const decoded = decodeHeader(req);

        if (!decoded) {   
            throw error(MESSAGES.ERROR_TOKEN_DOES_NOT_EXIST, 401);
        }

        const role = decoded.id_role;
        
        if (!canPerformAction(determineAction(req.method), role, table)) {
            throw error(MESSAGES.ERROR_ROLE_PERMISSION_DENIED, 403);
        }
    }
};

module.exports = {
    validateToken
};
