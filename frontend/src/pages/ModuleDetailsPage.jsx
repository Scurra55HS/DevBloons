import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Title,
  Description,
  Section,
  MaterialList,
  BackButton,
} from '../styles/ModuleDetailsPage';

const ModuleDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [module, setModule] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchModule = async () => {
      try {
        const response = await axios.get(`http://localhost:3333/api/modules/${id}`);
        setModule(response.data);
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar os detalhes do módulo');
        setLoading(false);
      }
    };

    fetchModule();
  }, [id]);

  if (loading) {
    return <Container>Carregando...</Container>;
  }

  if (error) {
    return <Container>{error}</Container>;
  }

  return (
    <Container>
      {module && (
        <>
          <BackButton onClick={() => navigate('/home')}>Voltar à Página Inicial</BackButton>
          <Title>{module.title}</Title>
          <Description>{module.description}</Description>
          <Section>
            <h3>Conteúdo:</h3>
            <p>{module.content || 'Conteúdo não disponível'}</p>
          </Section>
          <Section>
            <h3>Materiais:</h3>
            <MaterialList>
              {module.materials &&
                module.materials.map((material, index) => (
                  <li key={index}>
                    <a href={material.url} target="_blank" rel="noopener noreferrer">
                      {material.type || 'Material'}
                    </a>
                  </li>
                ))}
            </MaterialList>
          </Section>
        </>
      )}
    </Container>
  );
};

export default ModuleDetailsPage;
