const express = require('express')
const router = express.Router()
const { getItems, getItem, createItem, deleteItem, updateItem } = require('../controllers/playerController')

router.get('/', getItems)

router.get('/:id', getItem)

//TODO: Donde recibimos data
router.post('/', createItem)

router.patch('/:id', updateItem)

router.delete('/:id', deleteItem)


module.exports = router
