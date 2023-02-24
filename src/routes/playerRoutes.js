const express = require('express')
const router = express.Router()
const checkOrigin = require('../middleware/origin')
const checkAuth = require('../middleware/auth')
const checkRoleAuth = require('../middleware/roleAuth')
const { cacheInit } = require('../middleware/cache')
const { getItems, getItem, createItem, deleteItem, updateItem } = require('../controllers/playerController')


// Documentación de Swagger para cada endpoint
/**
/**
 * @swagger
 * v1/api/playerRoutes:
 *   get:
 *     summary: Obtiene la lista de jugadores
 *     description: Retorna la lista de todos los jugadores registrados.
 *     tags:
 *       - Players
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de jugadores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '../models/playerModel'
 *       401:
 *         description: No autorizado
 *       403:
 *         description: No tiene permisos para acceder
 *       404:
 *         description: Jugador no encontrado
 *
 */
router.get('/', checkAuth, checkRoleAuth(['user', "admin"]), getItems)

/**
 * @swagger
 * v1/api/playerRoutes/{id}:
 *   get:
 *     summary: Obtiene un jugador por ID
 *     description: Retorna un jugador específico basado en el ID proporcionado.
 *     tags:
 *       - Players
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del jugador a obtener
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Jugador encontrado
 *       401:
 *         description: No autorizado
 *       403:
 *         description: No tiene permisos para acceder
 *       404:
 *         description: Jugador no encontrado
 */
router.get('/:id', checkAuth, checkRoleAuth(['user', "admin"]), getItem)

/**
 * @swagger
 * v1/api/playerRoutes/:
*     summary: Crea un nuevo jugador
 *     description: Crea un nuevo jugador en el sistema.
 *     tags:
 *       - Players
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Objeto JSON que contiene la información del nuevo jugador
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '../models/playerModel'
 *     responses:
 *       201:
 *         description: Jugador creado
 *       400:
 *         description: Solicitud incorrecta
 *       401:
 *         description: No autorizado
 *       403:
 *         description: No tiene permisos para acceder
 */
router.post('/', checkAuth, checkRoleAuth(['admin']), cacheInit, createItem)
/**
 * @swagger
 * v1/api/playerRoutes/{id}:
 *   patch:
 *     summary: Actualiza a jugador por ID
 *     description: Actualiza a jugador por ID usando el request body
 *     tags:
 *       - Players
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the player to update
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Player object to update
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '../models/playerModel'
 *     responses:
 *       '200':
 *         description: Player updated successfully
 *         content:
 *           application/json:
 *             schema:
 *              $ref: '../models/playerModel'
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 *       '403':
 *         $ref: '#/components/responses/Forbidden'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       '500':
 *         $ref: '#/components/responses/InternalServerError'
 */

router.patch('/:id', checkAuth, checkRoleAuth(['admin']), updateItem)

/**
 * @swagger
 * v1/api/playerRoutes/{id}:
 *   delete:
 *     summary: Elimina al jugador por ID
 *     description: Elimina al jugador por su ID
 *     tags:
 *       - Players
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the player to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Player deleted successfully
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 *       '403':
 *         $ref: '#/components/responses/Forbidden'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       '500':
 *         $ref: '#/components/responses/InternalServerError'
 */

router.delete('/:id', checkAuth, checkRoleAuth(['admin']), checkOrigin, deleteItem)


module.exports = router
