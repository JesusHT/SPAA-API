const path     = require('path');
const fs       = require('fs');
const MESSAGES = require('../classes/messages');

const permissionsPath = path.join(__dirname, './permissions.json');
const permissions = JSON.parse(fs.readFileSync(permissionsPath, 'utf8'));

/**
 * Checks if an action can be performed by a role on a specific table.
 * @param {string} action - The action to perform.
 * @param {string} role - The user's role.
 * @param {string} table - The table on which the action is performed.
 * @returns {boolean} True if the action is allowed, false otherwise.
 */
function canPerformAction(action, role, table) {
    if (!permissions[table]) {
        console.error(MESSAGES.WARNING_NO_PERMISSION_TABLE + table);
        return false;
    }

    if (!permissions[table][role]) {
        console.error(MESSAGES.WARNING_NO_PERMISSION_ROLE);
        return false;
    }

    return permissions[table][role].includes(action);
}

/**
 * Determines the numeric value associated with an HTTP method.
 * @param {string} method - The HTTP method (GET, POST, PUT, DELETE).
 * @returns {number|null} The value associated with the method, or null if the method is unrecognized.
 */
function determineAction(method) {
    const actions = { GET: 2, POST: 1, PUT: 3, DELETE: 4 };
    return actions[method] || null;
}

module.exports = {
    canPerformAction,
    determineAction
};