const express = require('express');

const security   = require('./security');
const responses  = require('../../red/responses');
const controller = require('./index');

const router = express.Router();

router.get('/', getAll);
router.get('/:id', get);
router.delete('/', deleteItem);
router.post('/', insert);
router.put('/',update);

async function getAll(req, res, next){
   try {
      const users = await controller.getAll()
      responses.success(req, res, users, 200);
   } catch (error) {
      next(error);
   }
}

async function get(req, res, next){
   try {
      const users = await controller.get(req.params.id);
      responses.success(req, res, users, 200);
   } catch (error) {
      next(error);
   }
}

async function deleteItem(req, res, next){
   try {
      const users = await controller.deleteItem(req.body);
      responses.success(req, res, 'User successfully removed', 200);
   } catch (error) {
      next(error);
   }
}

async function insert(req, res, next){
   try {
      const users = await controller.insert(req.body);
      responses.success(req, res, 'User successfully inserted', 200);
   } catch (error) {
      next(error);
   }
}

async function update(req, res, next){
   try {
      const users = await controller.update(req.body);
      responses.success(req, res, 'User successfully updated', 200);
   } catch (error) {
      next(error);
   }
}

module.exports = router;