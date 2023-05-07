var imgModal = document.getElementById('imgModal');

function slideProduto1() {
  imgModal.classList.add('simplesmenteAtivo');

  if (imgModal.classList.contains('simplesmenteAtivo')) {
    var lista = ["https://wilgnerjr.github.io/imagens/imgOtimizada/adesivo.png", "https://wilgnerjr.github.io/imagens/imgOtimizada/banner.webp", "https://wilgnerjr.github.io/imagens/imgOtimizada/blocoDeComanda.webp"];
    var i = 0;

    while (i < lista.length) {
      imgModal.style.backgroundImage = lista[i];
      i++;
      sleep(5);
      alert('erro');
      if( i >= lista.length){
        i = 0;
      }
    }
  }
  

}



