const escolhas = document.querySelectorAll("[data-escolhas]");

function tamanhoImgs() {
  const largura = window.matchMedia("(max-width: 600px)").matches;
  escolhas.forEach((item) => {
    const img = item.children[0];
    const escolha = item.dataset.escolhas;
    if (largura) {
      img.setAttribute("src", `./img/${escolha}P.png`);
    } else {
      img.setAttribute("src", `./img/${escolha}G.png`);
    }
  });
}
tamanhoImgs();

window.addEventListener("resize", tamanhoImgs);

let escolhasSorteio = [];
function getEscolhas(event) {
  const escolhaJogador = event.currentTarget.dataset.escolhas;
  const escolhasArray = [...escolhas];
  escolhasArray.map(() => {
    const numero = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    escolhasSorteio.push(escolhasArray[numero]);
  });
  const escolhaCpu = escolhasSorteio[0].dataset.escolhas;
  escolhasSorteio = [];
}

escolhas.forEach((item) => {
  item.addEventListener("click", getEscolhas);
});
