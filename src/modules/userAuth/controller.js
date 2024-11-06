const TABLE = 'auth';

module.exports = function (database){

    let db = database;

    if (!db){
        db = require('../../DB/queries');
    }
    
    function getAll(){
        return db.getAll(TABLE);
    }
    
    function get(id){
        return db.getRole(TABLE, id);
    }

    return {
        getAll,
        get
    }
}