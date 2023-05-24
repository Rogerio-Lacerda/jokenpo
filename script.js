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

const ganhador = (jogador, cpu) => {
  const imgJogador = document.querySelector(`[data-escolhas="${jogador}"]`)
    .children[0];
  const imgCpu = document.querySelector(`[data-escolhas="${cpu}"]`).children[0];

  const largura = window.matchMedia("(max-width: 600px)").matches;
  let versus;
  if (largura) {
    versus = '<img src="./img/versusP.png" alt="">';
  } else {
    versus = '<img src="./img/versusG.png" alt="">';
  }
  if (jogador === cpu) {
    const container = document.querySelector(".ganhador");
    const conteudo = `
     <h2 class="resultado empate">EMPATE</h2>
      <div class="flex-container">
        <div>
          ${imgJogador.outerHTML}
        </div>
        <div class="versus">
          ${versus}
        </div>
        <div>
          ${imgCpu.outerHTML}
        </div>
      </div>
    `;
    container.innerHTML = conteudo;
  } else if (jogador === "pedra" && cpu === "tesoura") {
    const container = document.querySelector(".ganhador");
    const conteudo = `
     <h2 class="resultado vitoria">VITORIA</h2>
      <div class="flex-container">
        <div>
          ${imgJogador.outerHTML}
        </div>
        <div class="versus">
          ${versus}
        </div>
        <div>
          ${imgCpu.outerHTML}
        </div>
      </div>
    `;
    container.innerHTML = conteudo;
  } else if (jogador === "pedra" && cpu === "papel") {
    const container = document.querySelector(".ganhador");
    const conteudo = `
     <h2 class="resultado derrota">DERROTA</h2>
      <div class="flex-container">
        <div>
          ${imgJogador.outerHTML}
        </div>
        <div class="versus">
          ${versus}
        </div>
        <div>
          ${imgCpu.outerHTML}
        </div>
      </div>
    `;
    container.innerHTML = conteudo;
  } else if (jogador === "papel" && cpu === "pedra") {
    const container = document.querySelector(".ganhador");
    const conteudo = `
     <h2 class="resultado vitoria">VITORIA</h2>
      <div class="flex-container">
        <div>
          ${imgJogador.outerHTML}
        </div>
        <div class="versus">
          ${versus}
        </div>
        <div>
          ${imgCpu.outerHTML}
        </div>
      </div>
    `;
    container.innerHTML = conteudo;
  } else if (jogador === "papel" && cpu === "tesoura") {
    const container = document.querySelector(".ganhador");
    const conteudo = `
     <h2 class="resultado derrota">DERROTA</h2>
      <div class="flex-container">
        <div>
          ${imgJogador.outerHTML}
        </div>
        <div class="versus">
          ${versus}
        </div>
        <div>
          ${imgCpu.outerHTML}
        </div>
      </div>
    `;
    container.innerHTML = conteudo;
  } else if (jogador === "tesoura" && cpu === "papel") {
    const container = document.querySelector(".ganhador");
    const conteudo = `
     <h2 class="resultado vitoria">VITORIA</h2>
      <div class="flex-container">
        <div>
          ${imgJogador.outerHTML}
        </div>
        <div class="versus">
          ${versus}
        </div>
        <div>
          ${imgCpu.outerHTML}
        </div>
      </div>
    `;
    container.innerHTML = conteudo;
  } else if (jogador === "tesoura" && cpu === "pedra") {
    const container = document.querySelector(".ganhador");
    const conteudo = `
     <h2 class="resultado derrota">DERROTA</h2>
      <div class="flex-container">
        <div>
          ${imgJogador.outerHTML}
        </div>
        <div class="versus">
          ${versus}
        </div>
        <div>
          ${imgCpu.outerHTML}
        </div>
      </div>
    `;
    container.innerHTML = conteudo;
  }
};

let escolhasSorteio = [];
function getEscolhas(event) {
  const escolhaJogador = event.currentTarget.dataset.escolhas;
  const escolhasArray = [...escolhas];
  escolhasArray.map(() => {
    const numero = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    escolhasSorteio.push(escolhasArray[numero]);
  });
  const escolhaCpu = escolhasSorteio[0].dataset.escolhas;
  ganhador(escolhaJogador, escolhaCpu);
  escolhasSorteio = [];
}

escolhas.forEach((item) => {
  item.addEventListener("click", getEscolhas);
});
