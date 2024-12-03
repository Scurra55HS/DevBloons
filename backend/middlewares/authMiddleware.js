import jwt from 'jsonwebtoken';

export const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    console.log('Token ausente');
    return res.status(401).json({ message: 'Acesso não autorizado.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Token válido. Usuário decodificado:', decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.log('Token inválido:', error.message);
    res.status(401).json({ message: 'Token inválido.' });
  }
};




export const authorize = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: 'Permissão negada.' });
  }
  next();
};
