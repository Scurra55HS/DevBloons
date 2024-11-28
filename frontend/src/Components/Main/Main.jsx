import React from 'react';
import { ContainerB, ContentB, TitleB, ButtonB, ImageB, SubtitleB, SectionB, ContainerPRIN, FadeContainer, SlideInContainer, TitleIntro, MainBlock, BlockItem, TextContainer, ImageContainer, BlockReplicas, ImageBAlt } from "../../Styles/Main";
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

            {/* Blocos menores */}
            <BlockReplicas>
              {[...Array(9)].map((_, index) => (
                <BlockItem key={index}>
                  <ImageContainer>
                    <ImageBAlt src={LegisImage} alt={`Imagem do tópico ${index + 1}`} />
                  </ImageContainer>
                  <TextContainer>
                    <h4>Tópico {index + 2}</h4>
                    <p>Descrição do tópico {index + 2}...</p>
                  </TextContainer>
                </BlockItem>
              ))}
            </BlockReplicas>
          </SectionB>
        </ContainerPRIN>
      </SlideInContainer>
    </FadeContainer>
  );
};

export default Main;