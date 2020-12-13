const express = require('express');
const question = require('./question')
const auth = require('./auth')

const router = express.Router();

// /api
router.use('/questions',question)
router.use('/auth',auth)



module.exports = router