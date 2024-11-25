import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

export const SlideInContainer = styled.div`
  animation: ${slideIn} 1.5s ease-out forwards;
`;

// Definindo a animação de fade
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const FadeContainer = styled.div`
  animation: ${fadeIn} 2s ease-out;
  opacity: 1;
`;

export const ContainerPRIN = styled.div`
  background-color: #4d4d4d;
`;

export const ContainerB = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
`;

export const TitleB = styled.h1`
  font-size: 4rem;
  color: #FFFFFF;
  margin-top: 50px;
`;


export const ContentB = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-right: 50px;
  margin-top: 100px;
`;

export const SubtitleB = styled.p`
  margin-top: 20px;
  font-size: 2rem;
  color: #FFFFFF;
`;

export const ButtonB = styled.button`
  padding: 20px 30px;
  font-size: 1.2rem;
  color: black;
  font-weight: bold;
  background-color: #FFFFFF;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 50px;
  margin-right: 350px;
  margin-bottom: 200px;
  transition: transform 0.3s ease;
  align-self: center; /* Centraliza o botão no container */

  &:hover {
    transform: scale(1.1);
    background-color: #B5B1B1;
    color: #000000;
  }

  @media (max-width: 768px) {
    width: 100%; /* O botão ocupa toda a largura em telas pequenas */
  }
`;


export const ImageB = styled.img`
  max-width: 20%;
  border-radius: 10px;
  margin-bottom: 25px;
`;

export const SectionB = styled.div`
  min-height: 100vh;
  background: linear-gradient(45deg, #535353, #4d4d4d);
  display: flex;
  flex-direction: column;  /* Coloca os itens em uma coluna */
  justify-content: flex-start;
  align-items: center;
  color: white;
  text-align: center;
  padding: 20px;
`;

export const MainBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 200px;
  margin-bottom: 50px;
  min-height: 250px;  /* Tornar o bloco um pouco maior em altura */
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  /* Responsividade para telas menores */
  @media (max-width: 768px) {
    flex-direction: column;  /* Coloca imagem em cima do texto em telas pequenas */
    min-height: auto;
    max-width: 100%; /* Ajusta o tamanho para telas menores */
  }
`;



export const ImageBAlt = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;

export const TitleIntro = styled.h2`
  font-size: 3rem;
  color: #FFFFFF;
  margin-top: 100px;
  margin-bottom: 40px;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;


export const ImageContainer = styled.div`
  flex: 0 0 50%;
  position: relative;
  height: 300px;
  overflow: hidden;
`;


export const TextContainer = styled.div`
  flex: 0 0 50%;  /* O texto ocupa os outros 50% da largura */
  text-align: left;
  padding-left: 20px;
  margin-right: 50px;

  h4 {
    font-size: 1.6rem;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #666;
  }
`;



export const BlockReplicas = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 100px;
  
  /* Ajuste para telas menores */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;  /* Uma coluna por linha em telas pequenas */
    gap: 15px;
  }
`;


export const BlockItem = styled.div`
  display: flex;
  flex-direction: row;  /* Coloca imagem à esquerda e texto à direita */
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  margin: 20px auto;
  width: 80%;  /* O bloco vai ocupar 90% da largura do contêiner */
  max-width: 100%;
  min-height: 200px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  /* Responsividade para telas menores */
  @media (max-width: 768px) {
    flex-direction: column;  /* Coloca imagem em cima do texto em telas pequenas */
    min-height: auto;
    max-width: 100%; /* Ajusta o tamanho para telas menores */
  }
`;
