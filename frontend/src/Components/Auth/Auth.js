// src/Components/Auth/Auth.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthWrapper, FormContainer, Input, Button, ToggleButton, Title } from '../../Styles/Auth';

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      if (formData.password !== formData.confirmPassword) {
        alert('As senhas não coincidem!');
        return;
      }
      alert('Usuário cadastrado com sucesso!'); 
    } else {
      alert('Login realizado com sucesso!'); 
    }
    navigate('/');
  };

  return (
    <AuthWrapper>
      <FormContainer>
        <Title>{isRegister ? 'Cadastro de Colaboradores' : 'Login'}</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Senha"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          {isRegister && (
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirme a senha"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          )}
          <Button type="submit">{isRegister ? 'Cadastrar' : 'Entrar'}</Button>
        </form>
        <ToggleButton onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? 'Já possui conta? Faça login.' : 'Ainda não possui conta? Cadastre-se.'}
        </ToggleButton>
      </FormContainer>
    </AuthWrapper>
  );
};

export default Auth;
