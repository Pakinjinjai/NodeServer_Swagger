// routes/users.js
const express = require("express");
const router = express.Router();
const {
  register,
  login
} = require("../controllers/users");


//เข้าสู่ระบบ
/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Register a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Successfully registered
 *       '400':
 *         description: Invalid request body
 */
router.post('/login', login)

//สร้างผู้ใช้งาน
/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Successfully registered
 *       '400':
 *         description: Invalid request body
 */
router.post("/register", register);

module.exports = router;
