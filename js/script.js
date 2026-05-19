/* -- BOTÃO VOLTAR AO TOPO -- */
let btnTopo = document.getElementById("btnTopo");

if (btnTopo) {
    window.addEventListener("scroll", function () {
        if (document.documentElement.scrollTop > 200) {
            btnTopo.style.display = "block";
        } else {
            btnTopo.style.display = "none";
        }
    });

    btnTopo.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

/* -- FILTRO DE CIDADE -- */
function filtrarCidade() {
    let filtro = document.getElementById("filtroCidade");
    if (!filtro) return;

    let cidade = filtro.value;
    let cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {
        let cidadeCard = card.getAttribute("data-cidade");

        if (cidade === "todas" || cidade === cidadeCard) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

/* -- FORMULÁRIO -- */
let formCadastro = document.getElementById("formCadastro");

if (formCadastro) {
    formCadastro.addEventListener("submit", function (event) {
        event.preventDefault();

        let nome = document.getElementById("nome").value;
        let telefone = document.getElementById("telefone").value;
        let mensagem = document.getElementById("mensagemSucesso");

        /* -- Remove espaços e símbolos do telefone para validar -- */
        let telefoneLimpo = telefone.replace(/\D/g, "");

        if (telefoneLimpo.length < 10) {
            mensagem.style.color = "red";
            mensagem.innerText = "Digite um WhatsApp válido com DDD.";
            return;
        }

        mensagem.style.color = "green";
        mensagem.innerText = "Cadastro enviado com sucesso! Obrigado, " + nome + ".";

        formCadastro.reset();
    });
}