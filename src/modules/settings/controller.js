const TABLE = "settings";
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
    
    function insert(body){
        return db.insert(TABLE, body);
    }
    
    function update(body){
        return db.update(TABLE, body);
    }
    
    function deleteItem(body){
        return db.deleteItem(TABLE, body);
    }

    function getSettingsById(id){
        return db.getSettingsById(id)
    }

    return {
        getAll,
        get,
        getSettingsById,
        deleteItem,
        insert,
        update
    }
}