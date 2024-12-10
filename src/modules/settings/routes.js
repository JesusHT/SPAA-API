const express = require('express');

const security   = require('./security');
const responses  = require('../../red/responses');
const controller = require('./index');

const router = express.Router();

router.get('/', security(), getAll);
router.get('/:id',security(), get);
router.get('/byuser/:id',security(), getSettingsById);
router.delete('/',security(), deleteItem);
router.post('/', security(), insert);
router.put('/', security(), update);

async function getAll(req, res, next){
   try {
      const items = await controller.getAll()
      responses.success(req, res, items, 200);
   } catch (error) {
      next(error);
   }
}

async function get(req, res, next){
   try {
      const items = await controller.get(req.params.id);
      responses.success(req, res, items, 200);
   } catch (error) {
      next(error);
   }
}

async function getSettingsById(req, res, next){
   try {
      const items = await controller.getSettingsById(req.params.id);
      responses.success(req, res, items, 200);
   } catch (error) {
      next(error);
   }
}

async function deleteItem(req, res, next){
   try {
      const items = await controller.deleteItem(req.body);
      responses.success(req, res, 'Item successfully removed', 200);
   } catch (error) {
      next(error);
   }
}

async function insert(req, res, next){
   try {
      const items = await controller.insert(req.body);
      responses.success(req, res, 'Item successfully inserted', 200);
   } catch (error) {
      next(error);
   }
}

async function update(req, res, next){
   try {
      const items = await controller.update(req.body);
      responses.success(req, res, 'Item successfully updated', 200);
   } catch (error) {
      next(error);
   }
}

module.exports = router;