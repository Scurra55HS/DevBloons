import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: 40px auto;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: 'Roboto', sans-serif;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: #1a73e8;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 25px;
  line-height: 1.8;
  color: #4a4a4a;
  text-align: justify;
`;

export const Section = styled.section`
  margin-bottom: 30px;

  h3 {
    font-size: 1.6rem;
    color: #333;
    margin-bottom: 10px;
    border-bottom: 2px solid #1a73e8;
    display: inline-block;
    padding-bottom: 5px;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
    margin-top: 10px;
  }
`;

export const MaterialList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 10px;
    font-size: 1.1rem;

    a {
      text-decoration: none;
      color: #1a73e8;
      font-weight: bold;
      transition: color 0.3s ease;

      &:hover {
        color: #0c57d4;
      }
    }
  }
`;

export const QuizList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 20px;
    font-size: 1.1rem;

    strong {
      color: #333;
    }

    ul {
      list-style: disc;
      margin-left: 20px;

      li {
        margin-bottom: 5px;
        font-size: 1rem;
        color: #555;
      }
    }
  }
`;

export const BackButton = styled.button`
  display: block;
  margin: 0 auto 30px;
  padding: 10px 20px;
  font-size: 1.1rem;
  font-weight: bold;
  color: white;
  background-color: #1a73e8;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0c57d4;
    transform: scale(1.05);
  }

  &:active {
    background-color: #0a4abc;
    transform: scale(1);
  }
`;

