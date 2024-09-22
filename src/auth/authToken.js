const JWP      = require('jsonwebtoken');
const error    = require('../middleware/errors');
const config   = require('../config');
const MESSAGES = require('../classes/messages');

const secret = config.jwt.secret;

/**
 * Generates a JWT token.
 * @param {Object} data - The data to include in the token.
 * @returns {string} The generated JWT token.
 */
function generateToken(data) {
    return JWP.sign(data, secret, { algorithm: 'HS256' });
}

/**
 * Verifies a JWT token.
 * @param {string} token - The JWT token to verify.
 * @returns {Object} The decoded content of the token.
 * @throws {Error} If the token is invalid or does not exist.
 */
function verifyToken(token) {
    if (!token) {
        throw error(MESSAGES.ERROR_TOKEN_DOES_NOT_EXIST, 401);
    }
    return JWP.verify(token, secret);
}

/**
 * Extracts the token from the authorization header.
 * @param {string} authorization - The authorization header.
 * @returns {string} The extracted JWT token.
 * @throws {Error} If the header is not in the correct format.
 */
function getToken(authorization) {
    if (!authorization || !authorization.startsWith('Bearer ')) {
        throw error(MESSAGES.ERROR_TOKEN_INVALID_FORMAT, 401);
    }
    return authorization.replace('Bearer ', '');
}

/**
 * Decodes the token from the request header or cookies.
 * @param {Object} req - The HTTP request object.
 * @returns {Object} The decoded content of the token.
 */
function decodeHeader(req) {
    const authorization = req.headers.authorization || '';
    const token = authorization ? getToken(authorization) : req.cookies.token;

    if (!token) { return; }

    const decoded = verifyToken(token);
    req.user = decoded;

    return decoded;
}

module.exports = {
    generateToken,
    verifyToken,
    getToken,
    decodeHeader
};