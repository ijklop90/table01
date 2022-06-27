const express = require('express')
const router = express.Router()
const connection = require('../controllers/main')

router.get('/main/:id', connection.main)

module.exports = router;