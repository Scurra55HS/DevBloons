import styled from 'styled-components';

export const PageWrapper = styled.div`
  max-width: 1000px;
  margin: 100px auto;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
  color: #333;
`;

export const Banner = styled.div`
  text-align: center;
  background: linear-gradient(120deg, #ff7e5f, #feb47b);
  color: white;
  padding: 50px 20px;
  border-radius: 10px;
  margin-bottom: 40px;

  h1 {
    font-size: 3rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    opacity: 0.9;
  }
`;

export const VisualSection = styled.div`
  text-align: center;
  margin-bottom: 40px;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  p {
    margin-top: 10px;
    font-size: 1rem;
    color: #666;
  }
`;

export const ContentSection = styled.div`
  margin-bottom: 40px;

  h2 {
    font-size: 2rem;
    color: #ff7e5f;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    text-align: justify;
  }
`;

export const FactsList = styled.div`
  margin: 40px 0;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #feb47b;
  }
`;

export const FactCard = styled.div`
  background: #f9f9f9;
  border: 1px solid #eee;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  h4 {
    color: #ff7e5f;
    margin-bottom: 5px;
  }

  p {
    color: #666;
  }
`;

export const ExploreBlock = styled.div`
  background: #fdf2e9;
  padding: 30px;
  border-radius: 10px;
  margin: 40px 0;
  text-align: center;

  h2 {
    color: #ff7e5f;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.5;
    color: #333;
  }
`;

export const FooterActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

  button {
    padding: 10px 20px;
    font-size: 1rem;
    color: white;
    background: #ff7e5f;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: #feb47b;
    }
  }
`;
