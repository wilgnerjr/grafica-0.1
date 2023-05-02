const div = document.getElementById('imgModal');
const imagens = ["https://www.crtcom.com.br/uploads/produtos/adesivo-vinil-brilho-avery-recorte-eletronico-recorte-eletronico-4x0-162013483945660760460914bb7ba2e5.png","https://www.bemcolar.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/d/adesivo-de-parede-skate-boarding.png","https://www.graficadesignbrasil.com.br/uploads/produtos/adesivo-5x5cm-couche-80g-redondo-4x0-colorido-so-frente-160673406311278988225fc4d0ef1e847.png"]; // lista de imagens
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
