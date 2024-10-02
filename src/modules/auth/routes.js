const express       = require('express');
const { serialize } = require('cookie');
const controller    = require('./index');
const response      = require('../../red/responses');
const router        = express.Router();

router.post('/login', login);
router.get('/logout', logout);

async function login(req, res, next) {
   try {
      const token = await controller.login(req.body);

      /*
      res.setHeader('Set-Cookie', serialize('token', token, {
         httpOnly: true,
         secure: process.env.NODE_ENV === 'production',
         sameSite: 'strict',
         maxAge: 60 * 60 * 24,
         path: '/',
      }));

      console.log(`Token; ${token}`);
      
      */

      response.success(req, res, token, 200);
   } catch (error) {
      next(error);
   }
}

async function logout(req, res, next) {
   try {
      res.setHeader('Set-Cookie', serialize('token', '', {
           httpOnly: true,
           secure: process.env.NODE_ENV === 'production',
           sameSite: 'strict',
           expires: new Date(0),
           path: '/',
      }));

      response.success(req, res, { message: 'Logged out successfully' }, 200);
   } catch (error) {
      next(error);
   }
}

module.exports = router;   