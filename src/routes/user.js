const express = require('express')
const router = express.Router()
const checkOrigin = require('../middleware/origin')
const checkAuth = require('../middleware/auth')
const checkRoleAuth = require('../middleware/roleAuth')
const { cacheInit } = require('../middleware/cache')
const { getItems, getItem, createItem, deleteItem, updateItem } = require('../controllers/users')

/**
 * @swagger
 * tags:
 *   name: User
 *   description: User management
 */

// Implementar la autenticación globalmente para todas las operaciones
// Definir el esquema de seguridad en la sección de components
// y aplicarlo globalmente en la sección de security
/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *
 * security:
 *   - bearerAuth: []
 */

// Definir la operación que requiere autenticación y seguridad
/**
 * @swagger
 * /v1/api/user:
 *   get:
 *     summary: Endpoint que requiere autorización con token bearer
 *     description: Este endpoint requiere autorización mediante un token bearer para ser accedido.
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         schema:
 *           type: string
 *         required: true
 *         description: Token bearer para autorización
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *       401:
 *         description: No autorizado
 */
router.get('/', checkAuth, checkRoleAuth(['user', "admin"]), getItems)

/**
 * @swagger
 * /v1/api/user/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the user to get
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A user object
 *       404:
 *         description: User not found
 */
router.get('/:id', checkAuth, checkRoleAuth(['user', "admin"]), cacheInit, getItem)
/**
 * @swagger
 * /v1/api/user:
 *   post:
 *     summary: Create a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', checkAuth, checkRoleAuth(['admin']), cacheInit,  createItem)
/**
 * @swagger
 * /v1/api/user/{id}:
 *   patch:
 *     summary: Update a user by ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the user to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User updated successfully
 *       404:
 *         description: User not found
 */
router.patch('/:id', checkAuth, checkRoleAuth(['admin']), updateItem)
/**
 * @swagger
 * /v1/api/user/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the user to delete
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 */

router.delete('/:id', checkAuth, checkRoleAuth(['admin']), deleteItem)


module.exports = router
