const express = require('express')
const router = express.Router()
const connection = require('../controllers/edit')

router.post('/edit', connection.edit)

module.exports = router;