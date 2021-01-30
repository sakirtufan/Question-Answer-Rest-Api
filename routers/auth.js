const express = require('express');
const router = express.Router();
const { register, errorTest } = require('../controllers/auth')

// api/auth/register
router.post('/register', register);

router.get('/error', errorTest);



module.exports = router;