const express = require('express');
const user    = require('../auth')

const router  = express.Router();

router.get('/', (req, res) => {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    res.json({ message: user.getDecodedToken(req)});
});

module.exports = router;