const TABLE = 'inventory';
const BRANDS_TABLE = 'brands';
const MODEL_TABLE = 'model';

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

    function getInventoryDetails(id){
        return db.getInventoryDetails(id);
    }

    async function insert(body) {
        let { id_brand, id_model, ...inventoryData } = body;

        if (id_brand === 0) {
            if (!body.brand_name) {
                throw new Error('brand_name es requerido cuando id_brand es 0');
            }
            const newBrand = {
                name: body.brand_name
            };
            const brandResponse = await db.insert(BRANDS_TABLE, newBrand);
            id_brand = brandResponse.insertId;
        }

        if (id_model === 0) {
            if (!body.model_name) {
                throw new Error('model_name es requerido cuando id_model es 0');
            }
            const newModel = {
                name: body.model_name
            };
            const modelResponse = await db.insert(MODEL_TABLE, newModel);
            id_model = modelResponse.insertId;
        }

        const inventory = {
            id_brand: id_brand,
            id_model: id_model,
            id_module: inventoryData.id_module,
            name: inventoryData.name,
            quantity: inventoryData.quantity,
            stock: inventoryData.quantity,
            folio: inventoryData.folio,
            description: inventoryData.description || null,
            serie: inventoryData.serie || null,
            not_located: inventoryData.not_located || null,
            second_custodian: inventoryData.second_custodian || null,
            image_url: inventoryData.image_url || null,
            status: inventoryData.status,
            ...(inventoryData.id_inventory ? { id_inventory: inventoryData.id_inventory } : {})
        };
          

        const inventoryResponse = await db.insert(TABLE, inventory);
        const insertedInventory = await db.get(TABLE, inventoryResponse.insertId);

        return insertedInventory;
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
        insert,
        update,
        deleteItem,
        getInventoryDetails
    };
};
