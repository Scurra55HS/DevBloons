import styled from 'styled-components';

export const TopicoPage = styled.div`
  padding: 40px;
  max-width: 1200px;
  margin: 80px auto 40px;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ContentBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImgTopic = styled.img`
  max-width: 40%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  margin-left: 20px;

  /* Ajusta o tamanho da imagem para telas menores */
  @media (max-width: 768px) {
    max-width: 100%;  /* A imagem ocupa toda a largura em telas pequenas */
    margin-left: 0;
  }
`;

export const InfoBlock = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 40px;

  div {
    flex: 1;
    margin-right: 20px;
  }

  h4 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #666;
  }
`;

export const Divider = styled.div`
  width: 2px;
  height: 100%;
  background-color: #ddd;
  margin: 0 20px;
`;

export const ButtonTopic = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #4d4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 30px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;
