import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const LeftSide = styled.div`
  flex: 0.5;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const RightSide = styled.div`
  flex: 1;
  background-color: #f4f7fc;
  background-image: url('https://via.placeholder.com/600x800');
  background-size: cover;
  background-position: center;
`;

export const FormContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 100%;
  max-width: 400px;
`;

export const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #555;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  background-color: #2d2d2d;
  color: #fff;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1d1d1d;
  }
`;