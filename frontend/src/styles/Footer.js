import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #323232; 
  padding-top: 50px;
  color: #fff;
  flex-shrink: 0;  /* Impede que o footer seja encolhido */
`;

export const FooterSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  padding-bottom: 20px;
`;

export const FollowUsSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-right: 50px;
`;

export const IconLink = styled.a`
  color: #FFFFFF;
  font-size: 24px;
  margin: 5px;
  transition: transform 0.3s ease, color 0.3s ease; /* Animação suave para transformação e cor */
  
  &:hover {
    transform: scale(1.2); /* Aumenta o tamanho do ícone */
    color: #00aced; /* Muda a cor do ícone */
  }
`;

export const ImgFooter = styled.img`
  border-radius: 50%;
  width: 45px;
  transition: transform 0.3s ease, filter 0.3s ease; /* Animação suave para a imagem do ícone */

  &:hover {
    transform: scale(1.1); /* Aumenta a imagem do ícone quando passar o mouse */
    filter: brightness(1.2); /* Aumenta a luminosidade da imagem */
  }
`;

export const FooterBottom = styled.div`
  background-color: #0A0707;
  text-align: center;
  padding: 30px;
  color: #aaaaaa;
`;

export const TitleF = styled.h1`
  margin-top: 25px;
  margin-left: 120px;
  font-size: 2.2em;
  font-family: "Poppins", sans-serif;
  
  @media (max-width: 768px) {
    text-align: center;
    margin-top: 10px;
    margin-right: 0;
  }
`;
