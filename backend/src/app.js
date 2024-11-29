import express from 'express';
import cors from 'cors';
import authRoutes from './Routes/authRouter.js';

const app = express();

app.use(cors());
app.use(express.json());

// Usar as rotas
app.use('/api', authRoutes);

export default app;
