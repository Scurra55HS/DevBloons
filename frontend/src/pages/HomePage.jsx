// src/pages/HomePage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ButtonB, SubtitleB, ImageB, SectionB, MainBlock, TextContainer, ImageContainer, BlockReplicas, BlockItem, ImageBAlt, SlideInContainer, FadeContainer, TitleIntro, MainBlockIni, TitleB } from '../styles/HomePage';
import Livros from '../img/livros.png';

const HomePage = () => {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const response = await axios.get('http://localhost:3333/api/modules');
        setModules(response.data);
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar módulos');
        setLoading(false);
      }
    };

    fetchModules();
  }, []);

  const handleStartQuiz = () => {
    navigate('/quiz');
  };

  const handleModuleClick = (id) => {
    navigate(`/modules/${id}`);
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <FadeContainer>
      <SlideInContainer>
        <SectionB>
          <MainBlockIni>
            <TextContainer>
              <TitleB>Quiz de <br /> Legislação <br /> Trabalhista</TitleB>
              <SubtitleB>Teste seus conhecimentos sobre legislação trabalhista.</SubtitleB>
              <ButtonB onClick={handleStartQuiz}>Iniciar o Quiz</ButtonB>
            </TextContainer>
            <ImageB src={Livros} alt="Imagem relacionada ao quiz" />
          </MainBlockIni>

          <TitleIntro>Os Módulos de Ensino</TitleIntro>

          <MainBlock>
            <ImageContainer>
              <ImageBAlt src={Livros} alt="Imagem do módulo de legislação trabalhista" />
            </ImageContainer>
            <TextContainer>
              <h3>Aprenda de maneira prática e objetiva</h3>
              <p>Explore os módulos abaixo e amplie seu entendimento sobre as leis trabalhistas.</p>
            </TextContainer>
          </MainBlock>

          <BlockReplicas>
            {modules.map((module) => (
              <BlockItem key={module.id} onClick={() => handleModuleClick(module.id)}>
                <ImageContainer>
                  <ImageBAlt src={Livros} alt={`Imagem do módulo ${module.title}`} />
                </ImageContainer>
                <TextContainer>
                  <h4>{module.title}</h4>
                  <p>{module.description}</p>
                </TextContainer>
              </BlockItem>
            ))}
          </BlockReplicas>
        </SectionB>
      </SlideInContainer>
    </FadeContainer>
  );
};

export default HomePage;
