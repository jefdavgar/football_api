const express = require('express')
const router = express.Router()
const checkOrigin = require("../middleware/origin")
const { cacheInit } = require('../middleware/cache')
const { getItems, getItem, createItem, deleteItem, updateItem } = require('../controllers/playerController')

router.get(
  '/',
  checkOrigin,
  cacheInit, //TODO: <--- 😨 ¿WTF?
  getItems
)

router.get('/', checkOrigin, getItems)

router.get('/:id', getItem)

router.post('/', checkOrigin, cacheInit, createItem)

router.patch('/:id', updateItem)

router.delete('/:id', checkOrigin, deleteItem)


module.exports = router
