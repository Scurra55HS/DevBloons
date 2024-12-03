// src/components/ModulesPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ModulesPage = () => {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const response = await axios.get('http://localhost:3333/api/modules'); // A URL do seu backend
        setModules(response.data);
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar módulos');
        setLoading(false);
      }
    };

    fetchModules();
  }, []); // O array vazio garante que a chamada só será feita uma vez

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Módulos</h1>
      <ul>
        {modules.map((module) => (
          <li key={module.id}>
            <h3>{module.title}</h3>
            <p>{module.description}</p>
            {/* Adicione mais dados do módulo se necessário */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModulesPage;
