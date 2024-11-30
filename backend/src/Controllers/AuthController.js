import bcrypt from 'bcryptjs';
import User from '../Models/UserModel.js';

export const registerUser = async (req, res) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  try {
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).json({ message: 'Este e-mail já está registrado.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      password: hashedPassword,
      name,
    });

    res.status(201).json({ message: 'Usuário cadastrado com sucesso!', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar o usuário, tente novamente.' });
  }
};
