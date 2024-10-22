const connection = require('./connection');

function getAll(TABLE){
    return new Promise((resolve, reject)=>{
        connection.query(`SELECT * FROM ${TABLE} WHERE status IN (1, 2)`, (error, response) => {
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

module.exports = {
    getAll,
    get,
    insert,
    update,
    deleteItem,
    query
}