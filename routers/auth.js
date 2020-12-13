const express = require('express');

const router = express.Router();

//api/auth
router.get('/', (req, res) => {
  res.send("Auth Home Page")
})

//api/auth/register
router.get('/register', (req, res) => {
  res.send("Auth Register Page")
})

module.exports = router;