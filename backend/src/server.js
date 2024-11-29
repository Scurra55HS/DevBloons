// server.js
import app from './app.js';
import sequelize from './config/connDb.js';


const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conectado ao banco de dados');

    
    app.listen(process.env.PORT, () => {
      console.log(`Servidor rodando na porta ${process.env.PORT}`);
    });
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
};

startServer();
