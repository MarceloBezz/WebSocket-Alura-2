import { emitirAdicionarDocumento } from "./socket-front-index.js";
import { obterCookie, removerCookie } from "./utils/cookies.js";

const tokenJwt = obterCookie("tokenJwt")

const listaDocumentos = document.getElementById("lista-documentos");
const form = document.getElementById("form-adiciona-documento");
const inputDocumento = document.getElementById("input-documento");
const botaoLogout = document.getElementById("botao-logout")

//Deslogar da sessão
botaoLogout.addEventListener("click", () => {
  removerCookie("tokenJwt")
  alert("Usuário deslogado com sucesso!")
  window.location.href = "/login/index.html"
})

//Adicionar documento
form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  emitirAdicionarDocumento(inputDocumento.value);
  inputDocumento.value = "";
});

//Inserir documento na lista de documentos
function inserirLinkDocumento(nomeDocumento) {
  listaDocumentos.innerHTML += `
    <a
      href="/documento/index.html?nome=${nomeDocumento}"
      class="list-group-item list-group-item-action"
      id="documento-${nomeDocumento}"
    >
      ${nomeDocumento}
    </a>
  `;
}

//Remover documento
function removerLinkDocumento(nomeDocumento) {
  const documento = document.getElementById(`documento-${nomeDocumento}`);

  listaDocumentos.removeChild(documento);
}

export { inserirLinkDocumento, removerLinkDocumento };
