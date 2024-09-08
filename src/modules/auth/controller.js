const TABLE   = 'auth';
const bcrypt  = require('bcrypt');
const auth    = require('../../auth');
const error   = require('../../middleware/errors');
const MESSAGE = require('../../classes/messages');

module.exports = function (database){

    let db = database;
    
    if (!db){db = require('../../DB/queries');}
    
    async function login(body) {
        try {
            const data = await db.query(TABLE, body.worker_number);
    
            if (!data) { throw error(MESSAGE.ERROR_USER_NOT_FOUND, 401); }
    
            const isMatch = await bcrypt.compare(body.password, data.password);
    
            if (isMatch) {
                return auth.generateToken({...data});
            } else {
                throw error(MESSAGE.ERROR_AUTHENTICATION, 401);
            }
        } catch(error) {
            throw error;
        }
    }

    async function insert(data){

        const authData = {
            id_auth: data.id_auth
        }

        if(data.worker_number){ authData.worker_number = data.worker_number; }

        if (data.password) { authData.password = await bcrypt.hash(data.password.toString(), 10); }

        return db.insert(TABLE, authData);
    }
    
    return {
        insert,
        login
    }
}