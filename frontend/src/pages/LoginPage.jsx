import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Container, ErrorMessage, Form, FormContainer, Input, InputGroup, Label, LeftSide, RightSide, Title } from '../styles/LoginPage';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    const navigate = useNavigate();
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:3333/api/auth/login', { email, password });
        const token = response.data.token;
        if (token) {
          localStorage.setItem('token', token); // Salva o token no localStorage
          navigate('/home');
        } else {
          throw new Error('Token não recebido no login.');
        }
      } catch (error) {
        setErrorMessage(error.response?.data?.message || 'Erro ao fazer login');
      }
    };
  
  return (
    <Container>
      <LeftSide>
        <FormContainer>
          <Title>Login</Title>
          <Form onSubmit={handleLogin}>
            <InputGroup>
              <Label htmlFor="email">Email:</Label>
              <Input 
                type="email" 
                id="email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="password">Senha:</Label>
              <Input 
                type="password" 
                id="password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </InputGroup>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <Button type="submit">Login</Button>
          </Form>
        </FormContainer>
      </LeftSide>
      <RightSide></RightSide>
    </Container>
  );
};

export default LoginPage;
