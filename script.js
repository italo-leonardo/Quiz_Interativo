// Dados do quiz
const dadosQuiz = [
    {
      pergunta: "Quem escreveu a trilogia Senhor dos Anéis?",
      opcoes: ["Jonh Grogan", "J.R.R Tolkien", "J.A.R Tolkien", "Morgan Freeman"],
      correto: 1
    },
    {
      pergunta: "Como Isildur pegou o anel de Sauron?",
      opcoes: ["Pedindo", "Cortando a mão dele", "Roubando", "Encontrou na roupa dele"],
      correto: 1
    },
    {
      pergunta: "Qual o nome da montanha que Smaug dominou e os anões querem de volta?",
      opcoes: ["Montanha Sombria", "Montanha da Névoa", "Condado", "Erebor"],
      correto: 3
    },
    {
      pergunta: "O que Bilbo Bolseiro encontra na Montanha da Névoa?",
      opcoes: ["Sua espada", "Uma bússola", "Um anel", "Uma capa"],
      correto: 2
    },
    {
      pergunta: "Quantas raças de Hobbit existiam?",
      opcoes: ["1", "2", "3", "4"],
      correto: 2
    },
    {
      pergunta: "Para onde Gandalf, Galadriel, Elrond, Frodo e Bilbo foram no final de 'O Retorno do Rei'?",
      opcoes: ["Para Mordor", "Para o Condado", "Para Minas Tirith", "Para a Terra dos Elfos"],
      correto: 3
    }
  ];
  
  let perguntaAtual = 0, pontuacao = 0, respondido = false;
  
  // Inicia o quiz
  function iniciarQuiz() {
    trocarVisibilidade('container-inicial', 'none');
    trocarVisibilidade('container-quiz', 'block');
    carregarPergunta();
  }
  
  // Carrega a pergunta atual
  function carregarPergunta() {
    respondido = false;
    const { pergunta, opcoes } = dadosQuiz[perguntaAtual];
    document.getElementById('pergunta').textContent = pergunta;
  
    Array.from(document.getElementsByClassName('opcao')).forEach((botao, i) => {
      botao.textContent = opcoes[i];
      botao.style.backgroundColor = '';
      botao.disabled = false;
    });
  
    desativarBotao('botao-proxima', true);
  }
  
  // Seleciona resposta
  function selecionarResposta(selecionado) {
    if (respondido) return;
    respondido = true;
  
    const respostaCorreta = dadosQuiz[perguntaAtual].correto;
    Array.from(document.getElementsByClassName('opcao')).forEach((botao, i) => {
      botao.style.backgroundColor = i === respostaCorreta ? 'green' : (i === selecionado ? 'red' : '');
      botao.disabled = true;
    });
  
    if (selecionado === respostaCorreta) pontuacao++;
    desativarBotao('botao-proxima', false);
  }
  
  // Próxima pergunta ou resultado
  function mostrarProximaPergunta() {
    perguntaAtual++;
    if (perguntaAtual < dadosQuiz.length) {
      carregarPergunta();
    } else {
      mostrarResultado();
    }
  }
  
  // Mostra resultado final
  function mostrarResultado() {
    trocarVisibilidade('container-quiz', 'none');
    trocarVisibilidade('container-resultado', 'block');
    document.getElementById('pontuacao').textContent = pontuacao;
  
    const mensagens = ["Você pode melhorar!", "Bom resultado!", "Uau! Excelente resultado!"];
    document.getElementById('feedback').textContent = mensagens[Math.min(Math.floor(pontuacao / 4), 2)];
  }
  
  // Reinicia o quiz
  function reiniciarQuiz() {
    perguntaAtual = pontuacao = 0;
    trocarVisibilidade('container-resultado', 'none');
    trocarVisibilidade('container-inicial', 'block');
  }
  
  // Utilitários
  function trocarVisibilidade(id, display) {
    document.getElementById(id).style.display = display;
  }
  
  function desativarBotao(id, estado) {
    document.getElementById(id).disabled = estado;
  }

  