const TABLE = 'users';
const auth = require('../auth');
const settings = require('../settings');

module.exports = function (database){

    let db = database;

    if (!db){
        db = require('../../DB/queries');
    }
    
    function getAll(){
        return db.getAll(TABLE);
    }
    
    function get(id){
        return db.get(TABLE, id);
    }
    
    async function insert(body){
        const user = {
            id_users: body.id_users,
            name: body.name, 
            status: body.status,
            id_modules: body.id_modules,
            email: body.email
        }

        const response = await db.insert(TABLE, user);

        var insertId = 0;
        if(body.id_users == 0 || !body.id_users){
            insertId = response.insertId;
        } else {
            insertId = body.id_users;
        }

        var responseAuth = '';
        if(body.worker_number || body.password){
            responseAuth = await auth.insert({
                id_auth: insertId,
                worker_number: body.worker_number,
                password: body.password,
                id_role: body.id_role
            })
        }

        var responseSettings = '';
        if (body.id_role === 3) {
            responseSettings = await settings.insert({
                id_users: insertId,
                delete: body.delete,
                edit: body.edit,
                lends: body.lends
            })
        }

        return responseAuth;
    }
    
    function update(body){
        return db.update(TABLE, body);
    }
    
    function deleteItem(body){
        return db.deleteItem(TABLE, body);
    }

    return {
        getAll,
        get,
        deleteItem,
        insert,
        update
    }
}