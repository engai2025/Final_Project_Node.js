 import express from 'express';
import { createTransaction, getTransactions } from '../controllers/transactionController.js';
import { protect } from '../middlewares/auth.js';
import { validate } from '../middlewares/validate.js';
import { transactionValidationSchema } from '../schemas/transactionSchema.js';

const router = express.Router();

/**
 * @openapi
 * /api/transactions:
 *   post:
 *     summary: Create transaction
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/', protect, validate(transactionValidationSchema), createTransaction);

/**
 * @openapi
 * /api/transactions:
 *   get:
 *     summary: Get transactions
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', protect, getTransactions);

export default router;