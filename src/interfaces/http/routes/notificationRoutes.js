const { Router } = require('express');
const NotificationController = require('../controllers/NotificationController');
const { authMiddleware } = require('../middlewares/authMiddleware');

const router = Router();
const controller = new NotificationController();

/**
 * @openapi
 * /api/notifications/send:
 *   post:
 *     tags: [Notifications]
 *     summary: Publicar notificación en Pub/Sub
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, subject, message]
 *             properties:
 *               email:
 *                 type: string
 *               subject:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       200:
 *         description: Mensaje publicado en Pub/Sub
 *       400:
 *         description: Datos inválidos
 */
router.post('/send', authMiddleware, (req, res) => controller.send(req, res));

module.exports = router;
