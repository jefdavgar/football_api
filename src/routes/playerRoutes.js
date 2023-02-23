const express = require('express')
const router = express.Router()
const checkOrigin = require('../middleware/origin')
const checkAuth = require('../middleware/auth')
const checkRoleAuth = require('../middleware/roleAuth')
const { cacheInit } = require('../middleware/cache')
const { getItems, getItem, createItem, deleteItem, updateItem } = require('../controllers/playerController')


router.get('/', checkAuth, checkRoleAuth(['user', "admin"]), getItems)

router.get('/:id', checkAuth, checkRoleAuth(['user', "admin"]), getItem)

router.post('/', checkAuth, checkRoleAuth(['admin']), cacheInit, createItem)

router.patch('/:id', checkAuth, checkRoleAuth(['admin']), updateItem)

router.delete('/:id', checkAuth, checkRoleAuth(['admin']), checkOrigin, deleteItem)


module.exports = router
