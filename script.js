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
