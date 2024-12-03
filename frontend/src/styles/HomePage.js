import styled, { keyframes } from 'styled-components';

// Definindo a animação de deslizamento
const slideIn = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
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

export const SlideInContainer = styled.div`
  animation: ${slideIn} 1.5s ease-out forwards;
`;

export const FadeContainer = styled.div`
  animation: ${fadeIn} 2s ease-out;
  opacity: 1;
`;

export const SectionB = styled.section`
  background: linear-gradient(45deg, #535353, #4d4d4d);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  color: white;
  text-align: center;
`;

export const ImageB = styled.img`
  max-width: 20%;
  border-radius: 10px;
  margin-bottom: 25px;
`;

export const TitleB = styled.h1`
  font-size: 3rem;
  color: #fff;
  margin-top: 50px;
`;

export const SubtitleB = styled.p`
  margin-top: 20px;
  font-size: 3rem;
  color: black;
`;

export const ButtonB = styled.button`
  padding: 20px 30px;
  font-size: 1.2rem;
  color: black;
  font-weight: bold;
  background-color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 50px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    background-color: #B5B1B1;
    color: #000;
  }
`;

export const TitleIntro = styled.h2`
  font-size: 3rem;
  margin-top: 100px;
  margin-bottom: 40px;
  color: #fff;
`;

export const MainBlock = styled.div`
  display: flex;
  justify-content: space-between;  /* Coloca o conteúdo ao lado da imagem */
  align-items: center;
  width: 80%;
  max-width: 1200px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 50px;
  padding: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const MainBlockIni = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 70%;
  max-width: 1200px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 50px;
  padding: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  flex: 0 0 40%;
  position: relative;
  height: 300px;
  overflow: hidden;
`;

export const TextContainer = styled.div`
  flex: 0 0 50%;
  padding: 20px;
  text-align: left;

  h3 {
    font-size: 2rem;
    margin-bottom: 15px;
    color: #666;
  }

  p {
    font-size: 1.2rem;
    color: #666;
  }
`;

export const BlockReplicas = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;
  width: 80%;
  max-width: 1200px;
`;

export const BlockItem = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageBAlt = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;
