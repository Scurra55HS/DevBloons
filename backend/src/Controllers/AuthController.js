import bcrypt from 'bcryptjs';
import User from '../Models/UserModel.js';

export const registerUser = async (req, res) => {
    const { email, password, name } = req.body;
  
    // Verificar se os dados estão presentes
    if (!email || !password || !name) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }
  
    // Verificar se o usuário já existe no banco
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).json({ message: 'Este e-mail já está registrado.' });
    }
  
    try {
      // Criptografar a senha
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // Criar o novo usuário
      const newUser = await User.create({
        email,
        password: hashedPassword,
        name,
      });
  
      // Responder com o usuário criado (você pode retornar mais informações, como um token)
      res.status(201).json({ message: 'Usuário cadastrado com sucesso!', user: newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao criar o usuário, tente novamente.' });
    }
  };