//ADICIONANDO EVENTO DE CLICK - CONSTRUINDO UM CONTADOR

const botaoAumentar = document.querySelector("#aumentar"); //botaoAumentar linkado ao elemento html #aumentar
const botaoDiminuir = document.querySelector("#diminuir"); //botaoDiminuir linkado ao elemento html #diminuir

const meuContador = document.querySelector("#contador"); //meuContador linkado ao elemento html #contador

//botaoAumentar adiciona um evento do tipo click, dentro da função anônima vão os comandos...
botaoAumentar.addEventListener("click", (event) => {
  //...valor atual recebe o texto no h2 definido no html (0) e transforma esse texto em numero
  const valorAtual = Number(meuContador.textContent);
  //...então o contador recebe o esse numero e acrescenta +1
  meuContador.textContent = valorAtual + 1;
});

botaoDiminuir.addEventListener("click", (event) => {
  const valorAtual = Number(meuContador.textContent);

  meuContador.textContent = valorAtual - 1;
});
