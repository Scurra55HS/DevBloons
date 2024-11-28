import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { topicos } from '../../data.js';
import { ButtonTopic, ImgTopic, TopicoPage, Title, ContentBlock, InfoBlock, Divider } from '../../Styles/TopicDetails.js';

const TopicDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const topico = topicos.find((t) => t.id === parseInt(id));

  if (!topico) {
    return <p>Tópico não encontrado.</p>;
  }

  return (
    <TopicoPage>
      <ContentBlock>
        {/* Título à esquerda da imagem */}
        <Title>{topico.titulo}</Title>
        <ImgTopic src={topico.imagem} alt={topico.titulo} />
      </ContentBlock>
      
      {/* Descrição abaixo do título e imagem */}
      <p>{topico.descricao}</p>
      
      {/* Bloco com informações importantes */}
      <InfoBlock>
        <div>
          <h4>Informação 1</h4>
          <p>{topico.info1}</p>
        </div>
        <Divider />
        <div>
          <h4>Informação 2</h4>
          <p>{topico.info2}</p>
        </div>
      </InfoBlock>
      
      <ButtonTopic onClick={() => navigate(-1)}>
        Voltar aos Tópicos
      </ButtonTopic>
    </TopicoPage>
  );
};

export default TopicDetail;
