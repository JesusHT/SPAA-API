const express = require('express');

const security   = require('./security');
const responses  = require('../../red/responses');
const controller = require('./index');

const router = express.Router();

router.get('/', security(), getAll);
router.get('/:id', security(), get);

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

module.exports = router;