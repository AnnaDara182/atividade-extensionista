/* ======================================================
   ARQUIVO: script.js
   PROJETO: Empreendedoras Alimentícias
   OBJETIVO: Adicionar interatividade ao site
   RECURSOS:
   - Botão voltar ao topo
   - Filtro por cidade (empreendedoras)
   - Simulação de envio do formulário
====================================================== */


/* ======================================================
   1) BOTÃO "VOLTAR AO TOPO"
   Mostra o botão quando o usuário rola a página
   e permite voltar suavemente ao topo
====================================================== */

// Captura o botão no HTML pelo ID
let btnTopo = document.getElementById("btnTopo");

/*
  Esse IF garante que o código só será executado
  se o botão realmente existir na página.
  Isso evita erros caso alguma página não tenha o botão.
*/
if (btnTopo) {

    // Função que roda sempre que o usuário rola a página
    window.onscroll = function () {

        /*
          document.documentElement.scrollTop indica quantos pixels
          o usuário já rolou para baixo.
        */
        if (document.documentElement.scrollTop > 200) {
            // Se rolou mais de 200px, mostra o botão
            btnTopo.style.display = "block";
        } else {
            // Se rolou menos que 200px, esconde o botão
            btnTopo.style.display = "none";
        }
    };

    // Evento de clique no botão
    btnTopo.onclick = function () {

        /*
          window.scrollTo permite mover a página para outra posição.
          behavior: "smooth" faz uma rolagem suave.
        */
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
}


/* ======================================================
   2) FILTRO DE CIDADE (EMPREENDEDORAS)
   Mostra e esconde cards dependendo da cidade escolhida
====================================================== */

/*
  Essa função é chamada diretamente no HTML através do:
  onchange="filtrarCidade()"
*/
function filtrarCidade() {

    // Captura o valor selecionado no filtro (Palhoça, São José ou todas)
    let cidadeSelecionada = document.getElementById("filtroCidade");

    /*
      Se não existir filtroCidade na página,
      significa que não estamos na página empreendedoras.html.
      Então a função é encerrada para evitar erro.
    */
    if (!cidadeSelecionada) return;

    // Agora sim, pegamos o valor selecionado
    let valorCidade = cidadeSelecionada.value;

    // Captura todos os cards com a classe .card
    let cards = document.querySelectorAll(".card");

    // Percorre cada card e verifica a cidade
    cards.forEach(card => {

        // Lê a cidade do card (vem do atributo data-cidade no HTML)
        let cidadeCard = card.getAttribute("data-cidade");

        /*
          Se a cidade escolhida for "todas", mostra tudo.
          Se a cidade escolhida for igual à cidade do card, mostra o card.
          Caso contrário, esconde.
        */
        if (valorCidade === "todas" || valorCidade === cidadeCard) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}


/* ======================================================
   3) FORMULÁRIO (SIMULAÇÃO DE ENVIO)
   Quando o usuário envia o formulário:
   - impede recarregar a página
   - mostra mensagem de sucesso
   - limpa os campos
====================================================== */

// Captura o formulário pelo ID
let formCadastro = document.getElementById("formCadastro");

/*
  Esse IF é necessário porque:
  Apenas a página contato.html tem o formulário.
  Assim o código só executa quando o formulário existir.
*/
if (formCadastro) {

    // Evento submit acontece quando o usuário clica no botão enviar
    formCadastro.addEventListener("submit", function (event) {

        // Evita recarregar a página (comportamento padrão do form)
        event.preventDefault();

        // Captura o valor digitado no campo nome
        let nome = document.getElementById("nome").value;

        // Captura o local onde será exibida a mensagem
        let mensagem = document.getElementById("mensagemSucesso");

        // Exibe mensagem personalizada com o nome da empreendedora
        mensagem.innerText = "Cadastro enviado com sucesso! Obrigado, " + nome + ".";

        // Limpa os campos do formulário após enviar
        formCadastro.reset();
    });
}