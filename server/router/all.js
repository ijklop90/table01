const express = require('express')
const router = express.Router()
const connection = require('../controllers/all')

router.get('/all', connection.all)

module.exports = router;