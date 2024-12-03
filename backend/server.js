import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import sequelize from './config/connDb.js';
import authRoutes from './routes/authRoutes.js';
import moduleRoutes from './routes/moduleRoutes.js';


dotenv.config();


const app = express();
const PORT = process.env.PORT || 3333;

app.use(cors({ origin: 'http://localhost:5173', credentials: true, }));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/modules', moduleRoutes);

const startServer = async () => {
  try {
      await sequelize.authenticate();
      console.log('Conectado ao banco de dados!');
      await sequelize.sync();
      
      app.listen(PORT, () => {
          console.log(`Servidor rodando na porta: ${PORT}`);
        });
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
};

startServer();
