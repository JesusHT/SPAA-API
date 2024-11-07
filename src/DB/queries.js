const connection = require('./connection');

function getAll(TABLE){
    return new Promise((resolve, reject)=>{
        connection.query(`SELECT * FROM ${TABLE}`, (error, response) => {
            return error ? reject(error) : resolve(response);
        });
    });
}

function get(TABLE, id){
    return new Promise((resolve, reject)=>{
        connection.query(`SELECT * FROM ${TABLE} WHERE id_${TABLE}=${id}`,(error, response)=>{
            return error ? reject(error) : resolve(response);
        });
    });
}

function insert(TABLE, data){
    return new Promise((resolve, reject)=>{
        connection.query(`INSERT INTO ${TABLE} SET ? ON DUPLICATE KEY UPDATE ?`, [data, data],(error, response)=>{
            return error ? reject(error) : resolve(response);
        });
    }); 
}

function update(TABLE, data) {
    return new Promise((resolve, reject) => {
        const idKey = `id_${TABLE}`;
        connection.query(`UPDATE ${TABLE} SET ? WHERE ${idKey} = ?`, [data, data[idKey]], (error, response) => {
            return error ? reject(error) : resolve(response);
        });
    });
}

function deleteItem(TABLE, data){
    return new Promise((resolve, reject) => {
        const idKey = `id_${TABLE}`;
        connection.query(`UPDATE ${TABLE} SET status = 0 WHERE id_${TABLE} = ?`, [data[idKey]], (error, response) => {
            return error ? reject(error) : resolve(response);
        });
    });
}

function query(TABLE, worker_number){
    return new Promise((resolve, reject)=>{
        connection.query(`SELECT * FROM ${TABLE} WHERE worker_number = ${worker_number}`,(error, response)=>{
            return error ? reject(error) : resolve(response[0]);
        });
    });
}

function getRole(TABLE, id){
    return new Promise((resolve, reject)=>{
        connection.query(`SELECT id_role, worker_number FROM ${TABLE} WHERE id_${TABLE}=${id}`,(error, response)=>{
            return error ? reject(error) : resolve(response);
        });
    });
}

function getInventoryDetails(id_inventory) {
    return new Promise((resolve, reject) => {
        const query = `
            SELECT 
                inventory.*, 
                brands.name AS brand_name,
                model.name AS model_name,
                modules.name AS module_name
            FROM 
                inventory
            INNER JOIN 
                brands ON inventory.id_brand = brands.id_brands
            INNER JOIN 
                model ON inventory.id_model = model.id_model
            INNER JOIN 
                modules ON inventory.id_module = modules.id_modules
            WHERE 
                inventory.id_inventory = ?;
        `;
        
        connection.query(query, [id_inventory], (error, response) => {
            return error ? reject(error) : resolve(response);
        });
    });
}

module.exports = {
    getRole,
    getAll,
    get,
    insert,
    update,
    deleteItem,
    query,
    getInventoryDetails
}