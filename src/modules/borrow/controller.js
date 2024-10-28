const TABLE = "borrow";
const BORROWED_OBJECTS_TABLE = "borrowed_objects";

module.exports = function (database) {
    let db = database;

    if (!db) {
        db = require('../../DB/queries');
    }

    function getAll() {
        return db.getAll(TABLE);
    }

    function get(id) {
        return db.get(TABLE, id);
    }

    async function insert(body) {
        const { applicant, num_account, id_career, semester, teacher, practice_name, email, id_users, borrowedItems } = body;
        
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;

        const signature_url = `./signature_${formattedDate}_${num_account}.png`;

        const borrow = {
            applicant,
            num_account,
            id_career,
            semester,
            teacher,
            practice_name,
            email,
            id_users,
            date_start: date,
            status: 1,
            reminder_sent: 0,
            observations: null,
            date_end: null,
            date_real: null,
            signature_url
        };

        const borrowResponse = await db.insert(TABLE, borrow);
        const id_borrow = borrowResponse.insertId;

        for (const [key, obj] of Object.entries(borrowedItems)) {
            const borrowedObject = {
                id_borrow,
                id_inventory: obj.id_inventory,
                quantity: obj.quantity
            };
        
            try {
                await db.insert(BORROWED_OBJECTS_TABLE, borrowedObject);
            } catch (error) {
                console.error('Error inserting borrowed object:', error);
            }
        }
        const insertedBorrow = await db.get(TABLE, id_borrow);
        return insertedBorrow;
    }

    function update(body) {
        return db.update(TABLE, body);
    }

    function deleteItem(body) {
        return db.deleteItem(TABLE, body);
    }

    return {
        getAll,
        get,
        deleteItem,
        insert,
        update
    };
};
