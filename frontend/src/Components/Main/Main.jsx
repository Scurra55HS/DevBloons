import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerB, ContentB, TitleB, ButtonB, ImageB, SubtitleB, SectionB, ContainerPRIN, FadeContainer, SlideInContainer, TitleIntro, MainBlock, BlockItem, TextContainer, ImageContainer, BlockReplicas, ImageBAlt } from "../../Styles/Main";
import { topicos } from '../../data.js';
import Livros from '../../img/livros.png';
import LegisImage from '../../img/livros.png';

const Main = () => {
  return (
    <FadeContainer>
      <SlideInContainer>
        <ContainerPRIN>
          <ContainerB>
            <ContentB>
              <TitleB>Quiz de <br /> Legislação <br /> Trabalhista</TitleB>
              <SubtitleB>Teste seus conhecimentos sobre <br /> as leis que regem o trabalho no Brasil.</SubtitleB>
              <ButtonB>Começar o Quiz</ButtonB>
            </ContentB>
            <ImageB src={Livros} alt="Imagem relacionada ao quiz" />
          </ContainerB>

          {/* Seção Introdução à Legislação Trabalhista */}
          <SectionB>
            <TitleIntro>Introdução à Legislação Trabalhista</TitleIntro>

            {/* Bloco principal com imagem e texto */}
            <MainBlock>
              <ImageContainer>
                <ImageBAlt src={LegisImage} alt="Imagem sobre legislação trabalhista" />
              </ImageContainer>
              <TextContainer>
                <h3>O que é a Legislação Trabalhista?</h3>
                <p>
                  A Legislação Trabalhista no Brasil regulamenta os direitos e deveres dos trabalhadores e empregadores, criando um equilíbrio nas relações de trabalho...
                </p>
              </TextContainer>
            </MainBlock>

            <BlockReplicas>
              {topicos.map((topico) => (
                <Link 
                  to={`/topico/${topico.id}`} key={topico.id} style={{ textDecoration: "none", color: "inherit" }}>
                  <BlockItem>
                    <ImageContainer>
                      <ImageBAlt src={topico.imagem} alt={`Imagem do tópico ${topico.id}`} />
                    </ImageContainer>
                    <TextContainer>
                      <h4>{topico.titulo}</h4>
                      <p>{topico.descricao}</p>
                    </TextContainer>
                  </BlockItem>
                </Link>
              ))}
            </BlockReplicas>

          </SectionB>
        </ContainerPRIN>
      </SlideInContainer>
    </FadeContainer>
  );
};

export default Main;