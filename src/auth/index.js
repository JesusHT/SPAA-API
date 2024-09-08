const JWP      = require('jsonwebtoken');
const error    = require('../middleware/errors');
const config   = require('../config');
const secret   = config.jwt.secret;
const path     = require('path');
const fs       = require('fs');
const fetch    = require('node-fetch'); 
const MESSAGES = require('../classes/messages');

const permissionsPath = path.join(__dirname, './permissions.json');
const permissions = JSON.parse(fs.readFileSync(permissionsPath, 'utf8'));

function generateToken(data) {
    return JWP.sign(data, secret, { algorithm: 'HS256' });
}

function verifyToken(token) {
    if (!token) {
        throw error(MESSAGES.ERROR_TOKEN_DOES_NOT_EXIST, 401);
    }
    return JWP.verify(token, secret);
}

function getToken(authorization) {
    if (!authorization) {
        throw error(MESSAGES.ERROR_TOKEN_DOES_NOT_EXIST, 401);
    }

    if (authorization.indexOf('Bearer') === -1) {
        throw error(MESSAGES.ERROR_TOKEN_INVALID_FORMAT, 401);
    }

    let token = authorization.replace('Bearer ', '');
    return token;
}

function decodeHeader(req) {
    var authorization = req.headers.authorization || '';
    var token = '';

    if (authorization === '') {
        token = req.cookies.token;
    } else {
        token = getToken(authorization);
    }

    if (!token) {
        return;
    }

    const decoded = verifyToken(token);
    req.user = decoded;
    return decoded;
}

function getDecodedToken(req) {
    try {
        const authorization = req || '';
        
        var token = '';
        
        if (authorization.cookies) {
            token = req.cookies.token;
        } else {
            token = getToken(authorization);
        }

        const decoded = verifyToken(token);

        return decoded;
    } catch (err) {
        throw err
    }
}

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

function determineAction(method) {
    switch (method) {
        case 'GET':
            return 2; 
        case 'POST':
            return 1;
        case 'PUT':
            return 3;
        case 'DELETE':
            return 4; 
        default:
            return null;
    }
}

const validateToken = {
    confirmToken: async function(req, table) {
        const decoded = decodeHeader(req);

        if (!decoded) {   
            throw error(MESSAGES.ERROR_AUTHENTICATION, 401)
        }

        const id_auth = decoded.id_auth;
        
        try {
            const response = await fetch(`http://localhost:4000/api/usuarios/${id_auth}`, {
                method: 'GET',
                credentials: 'include',
            });

            if (!response.ok) {
                throw error(MESSAGES.ERROR_USER_NOT_FOUND, 401);
            }

            const userData = await response.json();
            const role     = userData.body[0].id_role;

            if (!canPerformAction(determineAction(req.method), role, table)) {
                throw error(MESSAGES.ERROR_ROLE_PERMISSION_DENIED, 403);
            }
        } catch (err) {
            throw err;
        }
    }
};

module.exports = {
    generateToken,
    validateToken,
    getDecodedToken,
};
