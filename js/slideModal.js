// Define a lista de classes que você deseja utilizar
var listaClasses = ["produto1", "produto2", "produto3"];

// Define o intervalo de tempo em milissegundos
var intervalo = 1000;

// Seleciona a div que você deseja alterar a classe
var minhaDiv = document.getElementById("imgModal");

// Inicia um contador para saber qual classe da lista deve ser utilizada
var i = 0;

// Define uma função que será chamada a cada intervalo de tempo
function alterarClasse() {
  // Remove a classe atual da div
  minhaDiv.classList.remove(listaClasses[i]);

  // Seleciona a próxima classe da lista
  i = (i + 1) % listaClasses.length;

  // Adiciona a nova classe à div
  minhaDiv.classList.add(listaClasses[i]);
}

// Inicia o intervalo de tempo para chamar a função de alteração de classe
setInterval(alterarClasse, intervalo);
