import React , { useEffect }  from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { topicos } from '../../data.js';
import {
  PageWrapper,
  Banner,
  VisualSection,
  ContentSection,
  FactsList,
  FactCard,
  ExploreBlock,
  FooterActions,
} from '../../Styles/TopicDetails.js';

const TopicDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const topico = topicos.find((t) => t.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);  // Rola até o topo da página
  }, []);
  
  if (!topico) {
    return <p>Tópico não encontrado.</p>;
  }

  return (
    <PageWrapper>
      {/* Seção de Apresentação */}
      <Banner>
        <h1>{topico.titulo}</h1>
        <p>{topico.descricaoCurta || 'Descubra mais sobre este tópico incrível!'}</p>
      </Banner>

      {/* Destaque Visual */}
      <VisualSection>
        <img src={topico.imagem} alt={topico.titulo} />
        <p>{topico.legendaImagem || 'Uma visão representativa do tópico.'}</p>
      </VisualSection>

      {/* Corpo do Conteúdo */}
      <ContentSection>
        <h2>Entenda mais sobre {topico.titulo}</h2>
        <p>{topico.descricao || 'Descrição completa sobre o tópico.'}</p>
      </ContentSection>

      {/* Lista de Fatos ou Curiosidades */}
      <FactsList>
        <h2>Fatos Interessantes</h2>
        {topico.fatos.map((fato, index) => (
          <FactCard key={index}>
            <h4>Fato {index + 1}</h4>
            <p>{fato}</p>
          </FactCard>
        ))}
      </FactsList>

      {/* Bloco de Exploração */}
      <ExploreBlock>
        <h2>Exemplo Prático</h2>
        <p>{topico.exemplo || 'Aqui você poderia explorar como este tópico funciona na prática.'}</p>
      </ExploreBlock>

      {/* Rodapé */}
      <FooterActions>
        <button onClick={() => navigate(-1)}>Voltar</button>
        <button onClick={() => alert('Explorar mais conteúdos!')}>
          Ver Relacionados
        </button>
      </FooterActions>
    </PageWrapper>
  );
};

export default TopicDetail;
