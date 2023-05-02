const div = document.getElementById('imgModal');
const imagens = [,,]; // lista de imagens
let i = 0; // índice da imagem atual
let intervalId = setInterval(trocarImagem, 1000); // armazena o ID retornado por setInterval

function trocarImagem() {
  div.style.backgroundImage = `url(${imagens[i]})`; // atualiza o fundo da div
  i = (i + 1) % imagens.length; // incrementa o índice e garante o looping infinito
}

function pararTrocaImagem() {
  clearInterval(intervalId); // para a execução da função
}

// Exemplo de uso:
// Para parar a execução da função depois de 10 segundos
// setTimeout(pararTrocaImagem, 1000);
