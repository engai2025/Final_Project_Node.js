 import express from 'express';
import dotenv from 'dotenv';
 
import cors from 'cors';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';

import connectDB from './config/db.js';
import { swaggerSpec } from './utilaty/swagger.js';

import authRoutes from './routes/auth.js';
import transactionRoutes from './routes/transactions.js';

import { notFound, globalErrorHandler } from './middlewares/errorMiddleware.js';

dotenv.config();
connectDB();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

 
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

 
app.use('/api/auth', authRoutes);
app.use('/api/transactions', transactionRoutes);

 
app.use(notFound);
app.use(globalErrorHandler);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📖 Docs: http://localhost:${PORT}/docs`);
});