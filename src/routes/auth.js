const express = require('express');
const router = express.Router();

const { loginCtrl, registerCtrl } = require('../controllers/auth');

/**
 * @swagger
 * /v1/api/auth/login:
 *   post:
 *     summary: Iniciar sesión
 *     description: Iniciar sesión en la aplicación
 *     tags:
 *       - Autenticación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Correo electrónico del usuario
 *                 example: johndoe@example.com
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario
 *                 example: password123
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *       400:
 *         description: Datos de inicio de sesión inválidos
 *       401:
 *         description: Credenciales de inicio de sesión incorrectas
 */
router.post('/login', loginCtrl);

/**
 * @swagger
 * /v1/api/auth/register:
 *   post:
 *     summary: Registrar usuario
 *     description: Registrar un nuevo usuario en la aplicación
 *     tags:
 *       - Autenticación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre del usuario
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 description: Correo electrónico del usuario
 *                 example: johndoe@example.com
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario
 *                 example: password123
 *             required:
 *               - name
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Registro de usuario exitoso
 *       400:
 *         description: Datos de registro de usuario inválidos
 *       409:
 *         description: El correo electrónico ya está registrado
 */
router.post('/register', registerCtrl);

module.exports = router;
