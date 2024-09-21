// Dados do quiz
const dadosQuiz = [
    {
      pergunta: "Qual filme de 2023 foi dirigido por Greta Gerwig e é baseado em uma famosa boneca?",
      opcoes: ["Barbie", "Oppenheimer", "Avatar 2", "Duna"],
      correto: 0
    },
    {
      pergunta: "Qual foi o último filme da franquia 'Missão Impossível', lançado em 2023?",
      opcoes: ["Efeito Fallout", "Nação Secreta", "Protocolo Fantasma", "Acerto de Contas - Parte 1"],
      correto: 3
    },
    // Adicione as demais perguntas aqui
  ];
  
  let perguntaAtual = 0;
  let pontuacao = 0;
  let respondido = false;
  
  // Função que inicia o quiz e esconde o botão "Iniciar"
  function iniciarQuiz() {
    document.getElementById('container-inicial').style.display = 'none';
    document.getElementById('container-quiz').style.display = 'block';
    carregarPergunta();
  }
  
  // Carrega a pergunta atual
  function carregarPergunta() {
    respondido = false;
    const elementoPergunta = document.getElementById('pergunta');
    const elementosOpcoes = document.getElementsByClassName('opcao');
  
    elementoPergunta.textContent = dadosQuiz[perguntaAtual].pergunta;
  
    for (let i = 0; i < elementosOpcoes.length; i++) {
      elementosOpcoes[i].textContent = dadosQuiz[perguntaAtual].opcoes[i];
      elementosOpcoes[i].style.backgroundColor = '';
      elementosOpcoes[i].disabled = false;
    }
  }
  
  // Manipula a seleção de resposta
  function selecionarResposta(selecionado) {
    if (respondido) return;
    respondido = true;
    
    const elementosOpcoes = document.getElementsByClassName('opcao');
    const respostaCorreta = dadosQuiz[perguntaAtual].correto;
  
    for (let i = 0; i < elementosOpcoes.length; i++) {
      if (i === respostaCorreta) {
        elementosOpcoes[i].style.backgroundColor = 'green';
      } else if (i === selecionado) {
        elementosOpcoes[i].style.backgroundColor = 'red';
      }
      elementosOpcoes[i].disabled = true;
    }
  
    if (selecionado === respostaCorreta) {
      pontuacao++;
    }
  
    document.getElementById('botao-proxima').disabled = false;
  }
  
  // Vai para a próxima pergunta
  function proximaPergunta() {
    perguntaAtual++;
    if (perguntaAtual < dadosQuiz.length) {
      carregarPergunta();
      document.getElementById('botao-proxima').disabled = true;
    } else {
      mostrarResultado();
    }
  }
  
  // Exibe o resultado e a mensagem personalizada
  function mostrarResultado() {
    document.getElementById('container-quiz').style.display = 'none';
    document.getElementById('container-resultado').style.display = 'block';
    
    const feedback = document.getElementById('feedback');
    document.getElementById('pontuacao').textContent = pontuacao;
    
    if (pontuacao <= 4) {
      feedback.textContent = "Você pode melhorar!";
    } else if (pontuacao <= 7) {
      feedback.textContent = "Bom resultado!";
    } else {
      feedback.textContent = "Uau! Excelente resultado!";
    }
  }
  
  // Reinicia o quiz
  function reiniciarQuiz() {
    perguntaAtual = 0;
    pontuacao = 0;
    document.getElementById('container-resultado').style.display = 'none';
    document.getElementById('container-inicial').style.display = 'block';
  }
  
  // Inicializa o quiz
  document.addEventListener('load', function () {
    document.getElementById('botao-proxima').disabled = true;
  });
  