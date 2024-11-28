import express from 'express';
import sequelize from './config/database.js';
import User from './models/User.js';
import Quiz from './models/Quiz.js';
import userRoutes from './routes/userRoutes.js';
import quizRoutes from './routes/quizRoutes.js';

const app = express();
app.use(express.json());

// Testando a conexão com o banco
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados bem-sucedida!');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });

// Sincronizando o banco de dados
sequelize.sync({ force: true })  // força a recriação das tabelas
  .then(() => {
    console.log('Tabelas criadas com sucesso!');
  })
  .catch(err => {
    console.error('Erro ao sincronizar as tabelas:', err);
  });

// Usando as rotas
app.use('/api', userRoutes);
app.use('/api', quizRoutes);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
