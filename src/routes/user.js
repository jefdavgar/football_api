const express = require('express')
const router = express.Router()
const checkOrigin = require('../middleware/origin')
const checkAuth = require('../middleware/auth')
const checkRoleAuth = require('../middleware/roleAuth')
const { cacheInit } = require('../middleware/cache')
const { getItems, getItem, createItem, deleteItem, updateItem } = require('../controllers/users')

//TODO: localhost/users/ --> LISTA
router.get('/', checkAuth, checkRoleAuth(['admin']), getItems)

//TODO: localhost/users/:id --> DETALLE
router.get('/:id', checkOrigin, cacheInit, getItem)

router.post('/', checkOrigin, createItem)

router.patch('/:id', updateItem)

router.delete('/:id', deleteItem)


module.exports = router
