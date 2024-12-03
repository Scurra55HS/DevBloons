import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: #0A0707;
  color: white;
  display: flex;
  align-items: center;
  z-index: 1000;
  padding: 10px 50px;
  box-sizing: border-box;
  justify-content: center;
`;

export const DivTi = styled.div`  
  width: 230px;
  height: 60px;
  border-bottom-left-radius: 60px;
  border-top-right-radius: 60px;
  margin-left: 30px;
  background: #272525;
  `

export const Title = styled.h1`
  margin-top: 10px;
  margin-left: 30px;
  font-size: 1.7em;
  font-family: "Poppins", sans-serif;
  
  @media (max-width: 768px) {
    text-align: center;
    margin-top: 10px;
    margin-right: 0;
  }
`;