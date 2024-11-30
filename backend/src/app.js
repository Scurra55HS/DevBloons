import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './config/connDb.js';
import authRoutes from './Routes/authRouter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3333;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/auth', authRoutes);

// Inicialização do servidor
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conectado ao banco de dados!');

    // Sincronizar modelos com o banco
    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
};

startServer();
