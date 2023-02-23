const express = require('express')
const router = express.Router()
const checkOrigin = require('../middleware/origin')
const checkAuth = require('../middleware/auth')
const checkRoleAuth = require('../middleware/roleAuth')
const { cacheInit } = require('../middleware/cache')
const { getItems, getItem, createItem, deleteItem, updateItem } = require('../controllers/users')

//TODO: localhost/users/ --> LISTA
router.get('/', checkAuth, checkRoleAuth(['user', "admin"]), getItems)

//TODO: localhost/users/:id --> DETALLE
router.get('/:id', checkAuth, checkRoleAuth(['user', "admin"]), cacheInit, getItem)

router.post('/', checkAuth, checkRoleAuth(['admin']), cacheInit,  createItem)

router.patch('/:id', checkAuth, checkRoleAuth(['admin']), updateItem)

router.delete('/:id', checkAuth, checkRoleAuth(['admin']), deleteItem)


module.exports = router
