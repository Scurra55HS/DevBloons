import React, { useState } from 'react';
import {
  ContainerQuiz,
  CaixaPergunta,
  TextoPergunta,
  Opcao,
  OpcoesContainer,
  BotaoProxima,
  ExplicacaoResposta,
} from '../styles/Quiz';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setAnswered] = useState(false); // Para controlar se a questão foi respondida

  const questions = [
    {
      text: '1 - Qual é a idade mínima para um jovem participar do programa de aprendizagem?',
      options: [
        { text: '14 anos', isCorrect: true },
        { text: '15 anos', isCorrect: false },
        { text: '16 anos', isCorrect: false },
        { text: '18 anos', isCorrect: false },
      ],
      explanation: 'Alternativa A): A idade mínima para participar do programa Jovem Aprendiz é 14 anos, desde que o jovem esteja matriculado e frequentando a escola, caso ainda não tenha concluído o ensino médio.',
    },
    {
      text: '2 - Qual é a duração máxima da jornada diária de trabalho prevista na CLT, sem contabilizar horas extras?',
      options: [
        { text: '6 horas', isCorrect: false },
        { text: '8 horas', isCorrect: true },
        { text: '10 horas', isCorrect: false },
        { text: '12 horas', isCorrect: false },
      ],
      explanation: 'Alternativa B): A jornada diária de trabalho padrão é de 8 horas, totalizando 44 horas semanais. Jornadas superiores a isso requerem pagamento de horas extras.',
    },
    {
      text: '3 - O que caracteriza um vínculo empregatício formal?',
      options: [
        { text: 'Registro em carteira, subordinação, salário e habitualidade.', isCorrect: true },
        { text: 'Pagamento semanal e contrato verbal.', isCorrect: false },
        { text: 'Freelancer e trabalho eventual.', isCorrect: false },
        { text: 'Autonomia total e ausência de registro.', isCorrect: false },
      ],
      explanation: 'Alternativa A): O vínculo empregatício é caracterizado pelo registro em carteira, subordinação ao empregador, habitualidade na prestação de serviços e o recebimento de salário.',
    },
    {
      text: '4 - Qual é o valor mínimo do adicional de hora extra?',
      options: [
        { text: '30% do valor da hora normal.', isCorrect: false },
        { text: '50% do valor da hora normal.', isCorrect: true },
        { text: '70% do valor da hora normal.', isCorrect: false },
        { text: '100% do valor da hora normal.', isCorrect: false },
      ],
      explanation: 'Alternativa B): A CLT determina que o adicional de hora extra deve ser de no mínimo 50% do valor da hora normal.',
    },
    {
      text: '5 - Qual é a contribuição previdenciária devida pelo empregador?',
      options: [
        { text: 'Apenas FGTS.', isCorrect: false },
        { text: 'FGTS e INSS.', isCorrect: true },
        { text: 'Somente INSS.', isCorrect: false },
        { text: 'Nenhuma contribuição.', isCorrect: false },
      ],
      explanation: 'Alternativa B): O empregador deve recolher o FGTS e a contribuição previdenciária (INSS) para garantir a seguridade social do trabalhador.',
    },
    {
      text: '6 - Qual é o prazo máximo para pagamento de verbas rescisórias após a demissão sem justa causa?',
      options: [
        { text: '2 dias úteis.', isCorrect: false },
        { text: '5 dias úteis.', isCorrect: false },
        { text: '10 dias corridos.', isCorrect: true },
        { text: '30 dias corridos.', isCorrect: false },
      ],
      explanation: 'Alternativa C): O prazo máximo para pagamento das verbas rescisórias é de 10 dias corridos, conforme a CLT.',
    },
    {
      text: '7 - Qual é o percentual mínimo do FGTS depositado pelo empregador mensalmente?',
      options: [
        { text: '5% do salário.', isCorrect: false },
        { text: '8% do salário.', isCorrect: true },
        { text: '10% do salário.', isCorrect: false },
        { text: '12% do salário.', isCorrect: false },
      ],
      explanation: 'Alternativa B): O empregador deve depositar mensalmente 8% do salário do trabalhador em sua conta do FGTS.',
    },
    {
      text: '8 - O trabalhador tem direito a aviso prévio proporcional em demissões. Qual é o tempo mínimo desse aviso?',
      options: [
        { text: '15 dias.', isCorrect: false },
        { text: '30 dias.', isCorrect: true },
        { text: '45 dias.', isCorrect: false },
        { text: '60 dias.', isCorrect: false },
      ],
      explanation: 'Alternativa B): O aviso prévio é de no mínimo 30 dias, podendo ser proporcional ao tempo de serviço.',
    },
    {
      text: '9 - Qual é a duração mínima de intervalo para almoço em jornadas superiores a 6 horas?',
      options: [
        { text: '15 minutos.', isCorrect: false },
        { text: '30 minutos.', isCorrect: false },
        { text: '1 hora.', isCorrect: true },
        { text: '2 horas.', isCorrect: false },
      ],
      explanation: 'Alternativa C): Para jornadas superiores a 6 horas, a CLT estabelece intervalo mínimo de 1 hora para refeição e descanso.',
    },
    {
      text: '10 - Quando o trabalhador pode sacar o FGTS?',
      options: [
        { text: 'Quando quiser.', isCorrect: false },
        { text: 'Apenas em demissão sem justa causa.', isCorrect: false },
        { text: 'Em casos específicos, como demissão sem justa causa, aposentadoria ou doenças graves.', isCorrect: true },
        { text: 'Somente ao completar 10 anos de trabalho.', isCorrect: false },
      ],
      explanation: 'Alternativa C): O FGTS pode ser sacado em situações específicas, como demissão sem justa causa, aposentadoria, compra de imóvel ou doenças graves.',
    },
    {
      text: '11 - Qual é a idade mínima permitida para o trabalho, segundo a Constituição Federal do Brasil?',
      options: [
        { text: '12 anos.', isCorrect: false },
        { text: '14 anos.', isCorrect: false },
        { text: '16 anos.', isCorrect: true },
        { text: '18 anos.', isCorrect: false },
      ],
      explanation: 'Alternativa C): A idade mínima permitida para o trabalho no Brasil é 16 anos, salvo na condição de aprendiz, que é permitida a partir dos 14 anos.',
    },
    {
      text: '12 - Qual é o tempo máximo de trabalho permitido para menores de idade (16 a 18 anos) por dia?',
      options: [
        { text: '4 horas.', isCorrect: false },
        { text: '6 horas.', isCorrect: true },
        { text: '8 horas.', isCorrect: false },
        { text: '10 horas.', isCorrect: false },
      ],
      explanation: 'Alternativa B): Menores de idade podem trabalhar no máximo 6 horas por dia, salvo casos de aprendiz, com limite de 8 horas, incluindo o tempo de curso.',
    },
    {
      text: '13 - O que caracteriza uma justa causa para demissão?',
      options: [
        { text: 'Desempenho ruim no trabalho.', isCorrect: false },
        { text: 'Falta grave cometida pelo empregado, como desídia ou ato de improbidade.', isCorrect: true },
        { text: 'Atrasos frequentes.', isCorrect: false },
        { text: 'Pedido de transferência de função.', isCorrect: false },
      ],
      explanation: 'Alternativa B): A justa causa ocorre quando o trabalhador comete uma falta grave, como desídia, indisciplina, ato de improbidade ou condutas similares.',
    },
    {
      text: '14 - Qual é o percentual do adicional noturno para trabalhadores urbanos?',
      options: [
        { text: '10%.', isCorrect: false },
        { text: '20%.', isCorrect: true },
        { text: '30%.', isCorrect: false },
        { text: '50%.', isCorrect: false },
      ],
      explanation: 'Alternativa B): O adicional noturno para trabalhadores urbanos é de 20% sobre o valor da hora normal, válido para trabalho entre 22h e 5h.',
    },
    {
      text: '15 - Qual é o prazo para o trabalhador requerer o seguro-desemprego após ser demitido?',
      options: [
        { text: '30 dias.', isCorrect: false },
        { text: '60 dias.', isCorrect: true },
        { text: '90 dias.', isCorrect: false },
        { text: '120 dias.', isCorrect: false },
      ],
      explanation: 'Alternativa B): O trabalhador pode requerer o seguro-desemprego dentro de 60 dias após a data de sua dispensa sem justa causa.',
    },
    {
      text: '16 - Quantas vezes o trabalhador pode sacar o PIS por ano, quando tem direito?',
      options: [
        { text: 'Apenas uma vez.', isCorrect: true },
        { text: 'Duas vezes.', isCorrect: false },
        { text: 'Três vezes.', isCorrect: false },
        { text: 'Quantas vezes for necessário.', isCorrect: false },
      ],
      explanation: 'Alternativa A): O abono salarial PIS é pago anualmente, e o trabalhador pode sacar apenas uma vez no período de pagamento.',
    },
    {
      text: '17 - Qual é o percentual de desconto padrão para contribuição do INSS do trabalhador?',
      options: [
        { text: '6% do salário.', isCorrect: false },
        { text: '8% a 11% do salário, dependendo da faixa salarial.', isCorrect: true },
        { text: '12% do salário.', isCorrect: false },
        { text: '15% do salário.', isCorrect: false },
      ],
      explanation: 'Alternativa B): A contribuição do INSS varia entre 8% e 11%, dependendo da faixa salarial do trabalhador.',
    },
    {
      text: '18 - Em qual situação o trabalhador não tem direito ao aviso prévio?',
      options: [
        { text: 'Pedido de demissão.', isCorrect: false },
        { text: 'Demissão por justa causa.', isCorrect: true },
        { text: 'Rescisão indireta.', isCorrect: false },
        { text: 'Acordo de demissão.', isCorrect: false },
      ],
      explanation: 'Alternativa B): Em casos de demissão por justa causa, o trabalhador perde o direito ao aviso prévio.',
    },
    {
      text: '19 - Qual é o limite de tempo para a licença-maternidade obrigatória?',
      options: [
        { text: '90 dias.', isCorrect: false },
        { text: '120 dias.', isCorrect: true },
        { text: '180 dias.', isCorrect: false },
        { text: '240 dias.', isCorrect: false },
      ],
      explanation: 'Alternativa B): A licença-maternidade obrigatória é de 120 dias, podendo ser prorrogada em alguns casos específicos.',
    },
    {
      text: '20 - O que é um contrato de trabalho intermitente?',
      options: [
        { text: 'Contrato com jornada fixa de 8 horas por dia.', isCorrect: false },
        { text: 'Contrato em que o trabalhador presta serviços com alternância de períodos de trabalho e inatividade.', isCorrect: true },
        { text: 'Contrato sem registro em carteira.', isCorrect: false },
        { text: 'Contrato por tempo indeterminado.', isCorrect: false },
      ],
      explanation: 'Alternativa B): O contrato intermitente permite que o trabalhador preste serviços em períodos alternados, com remuneração proporcional ao tempo trabalhado.',
    },
    {
      text: '21 - Qual é o prazo máximo para o empregador registrar o contrato de trabalho em carteira?',
      options: [
        { text: '24 horas.', isCorrect: false },
        { text: '2 dias úteis.', isCorrect: false },
        { text: '5 dias úteis.', isCorrect: true },
        { text: '10 dias úteis.', isCorrect: false },
      ],
      explanation: 'Alternativa C): O empregador tem até 5 dias úteis para registrar o contrato de trabalho na carteira do trabalhador.',
    },
    {
      text: '22 - Qual é o percentual do aviso prévio proporcional por ano trabalhado?',
      options: [
        { text: '1 dia adicional por ano.', isCorrect: false },
        { text: '2 dias adicionais por ano.', isCorrect: true },
        { text: '5 dias adicionais por ano.', isCorrect: false },
        { text: '10 dias adicionais por ano.', isCorrect: false },
      ],
      explanation: 'Alternativa B): O aviso prévio proporcional adiciona 2 dias por ano de trabalho ao prazo mínimo de 30 dias, limitado a 90 dias.',
    },
    {
      text: '23 - Quem tem direito ao adicional de insalubridade?',
      options: [
        { text: 'Todo trabalhador.', isCorrect: false },
        { text: 'Trabalhadores expostos a agentes nocivos à saúde.', isCorrect: true },
        { text: 'Trabalhadores que fazem horas extras.', isCorrect: false },
        { text: 'Apenas trabalhadores com mais de 10 anos de serviço.', isCorrect: false },
      ],
      explanation: 'Alternativa B): O adicional de insalubridade é devido a trabalhadores expostos a condições que possam prejudicar a saúde, conforme grau de insalubridade.',
    },
    {
      text: '24 - O que acontece quando o trabalhador é demitido sem justa causa?',
      options: [
        { text: 'Ele perde o direito ao FGTS.', isCorrect: false },
        { text: 'Ele tem direito a sacar o FGTS e receber seguro-desemprego, se cumprir os requisitos.', isCorrect: true },
        { text: 'Ele não tem direito ao aviso prévio.', isCorrect: false },
        { text: 'Ele perde o direito a férias proporcionais.', isCorrect: false },
      ],
      explanation: 'Alternativa B): Na demissão sem justa causa, o trabalhador pode sacar o FGTS, receber seguro-desemprego e outros direitos, como férias proporcionais.',
    },
    {
      text: '25 - Qual é o período de experiência máximo permitido em contratos de trabalho?',
      options: [
        { text: '30 dias.', isCorrect: false },
        { text: '60 dias.', isCorrect: false },
        { text: '90 dias.', isCorrect: true },
        { text: '120 dias.', isCorrect: false },
      ],
      explanation: 'Alternativa C): O contrato de experiência pode durar até 90 dias, podendo ser prorrogado uma vez dentro desse período.',
    },
    {
      text: '26 - Qual é o objetivo principal do Programa de Participação nos Lucros ou Resultados (PLR)?',
      options: [
        { text: 'Aumentar o salário base do trabalhador.', isCorrect: false },
        { text: 'Fomentar a produtividade e engajamento dos empregados.', isCorrect: true },
        { text: 'Garantir férias adicionais aos trabalhadores.', isCorrect: false },
        { text: 'Reduzir encargos trabalhistas.', isCorrect: false },
      ],
      explanation: 'Alternativa B): O PLR visa incentivar a produtividade e o engajamento dos empregados, distribuindo parte dos lucros ou resultados da empresa.',
    },
    {
      text: '27 - Qual é a principal função da CIPA (Comissão Interna de Prevenção de Acidentes)?',
      options: [
        { text: 'Gerir as finanças da empresa.', isCorrect: false },
        { text: 'Prevenir acidentes e doenças ocupacionais.', isCorrect: true },
        { text: 'Contratar novos funcionários.', isCorrect: false },
        { text: 'Administrar os benefícios dos trabalhadores.', isCorrect: false },
      ],
      explanation: 'Alternativa B): A CIPA tem como função principal prevenir acidentes e promover a segurança e saúde no ambiente de trabalho.',
    },
    {
      text: '28 - Em qual situação o trabalhador pode pedir rescisão indireta do contrato?',
      options: [
        { text: 'Quando o empregador comete faltas graves, como assédio ou descumprimento de contrato.', isCorrect: true },
        { text: 'Quando deseja mudar de emprego.', isCorrect: false },
        { text: 'Quando está insatisfeito com o salário.', isCorrect: false },
        { text: 'Quando deseja tirar licença sem vencimento.', isCorrect: false },
      ],
      explanation: 'Alternativa A): A rescisão indireta ocorre quando o empregador comete faltas graves, permitindo que o trabalhador rescinda o contrato mantendo seus direitos.',
    },
    {
      text: '29 - Qual é o intervalo obrigatório entre uma jornada e outra?',
      options: [
        { text: '8 horas.', isCorrect: false },
        { text: '11 horas.', isCorrect: true },
        { text: '12 horas.', isCorrect: false },
        { text: '24 horas.', isCorrect: false },
      ],
      explanation: 'Alternativa B): A CLT determina que o intervalo entre duas jornadas deve ser de, no mínimo, 11 horas consecutivas.',
    },
    {
      text: '30 - O que caracteriza um contrato de trabalho por tempo parcial?',
      options: [
        { text: 'Jornada de até 20 horas semanais.', isCorrect: false },
        { text: 'Jornada de até 30 horas semanais, sem possibilidade de horas extras.', isCorrect: true },
        { text: 'Jornada de 44 horas semanais, com flexibilização.', isCorrect: false },
        { text: 'Jornada de 8 horas diárias, sem pausas.', isCorrect: false },
      ],
      explanation: 'Alternativa B): O contrato por tempo parcial limita a jornada a até 30 horas semanais, sem a possibilidade de horas extras.',
    },

    
  ];

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (index) => {
    if (answered) return; // Não permite escolher mais de uma opção
    setSelectedOption(index);
    setAnswered(true); // Marca como respondido
  };

  const handleNextQuestion = () => {
    setSelectedOption(null); // Limpa a seleção
    setAnswered(false); // Reseta o estado de resposta
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <ContainerQuiz>
      <CaixaPergunta>
        <TextoPergunta>{currentQuestion.text}</TextoPergunta>
        <OpcoesContainer>
          {currentQuestion.options.map((option, index) => (
            <Opcao
              key={index}
              onClick={() => handleAnswer(index)}
              isCorrect={option.isCorrect}
              isSelected={selectedOption === index}
              disabled={answered} // Desabilita as opções após uma seleção
            >
              {option.text}
            </Opcao>
          ))}
        </OpcoesContainer>

        {answered && (
          <>
            <ExplicacaoResposta>
              <p>{currentQuestion.explanation}</p>
            </ExplicacaoResposta>
            <BotaoProxima onClick={handleNextQuestion}>Próxima</BotaoProxima>
          </>
        )}
      </CaixaPergunta>
    </ContainerQuiz>
    
  );
};

export default Quiz;
