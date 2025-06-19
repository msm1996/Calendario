const mesAno = document.getElementById("mesAno");
const corpoCalendario = document.getElementById("corpoCalendario");
const anterior = document.getElementById("anterior");
const proximo = document.getElementById("proximo");

let dataAtual = new Date();

const nomesMeses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

function atualizarCalendario() {
    const ano = dataAtual.getFullYear();
    const mes = dataAtual.getMonth();

    // Atualiza o título
    mesAno.textContent = `${nomesMeses[mes]} de ${ano}`;

    // Limpa o corpo da tabela
    corpoCalendario.innerHTML = "";

    const primeiroDiaSemana = new Date(ano, mes, 1).getDay(); // 0 = domingo
    const totalDias = new Date(ano, mes + 1, 0).getDate();

    let dia = 1;
    let linha = document.createElement("tr");

    // Preenche os primeiros dias vazios
    for (let i = 0; i < primeiroDiaSemana; i++) {
        linha.appendChild(document.createElement("td"));
    }

    // Preenche os dias do mês
    for (let i = primeiroDiaSemana; i < 7; i++) {
        const celula = document.createElement("td");
        celula.textContent = dia++;
        linha.appendChild(celula);
    }
    corpoCalendario.appendChild(linha);

    // Continua preenchendo as semanas seguintes
    while (dia <= totalDias) {
        linha = document.createElement("tr");
        for (let i = 0; i < 7; i++) {
            if (dia > totalDias) {
                linha.appendChild(document.createElement("td"));
            } else {
                const celula = document.createElement("td");
                celula.textContent = dia++;
                linha.appendChild(celula);
            }
        }
        corpoCalendario.appendChild(linha);
    }
}

// Eventos para os botões de mudar mês
anterior.addEventListener("click", () => {
    dataAtual.setMonth(dataAtual.getMonth() - 1);
    atualizarCalendario();
});

proximo.addEventListener("click", () => {
    dataAtual.setMonth(dataAtual.getMonth() + 1);
    atualizarCalendario();
});

// Inicializa o calendário
atualizarCalendario();

let mostrandoImagem1 = true;

function trocarImagem() {
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");

    if (mostrandoImagem1) {
        img1.classList.remove("visivel");
        img1.classList.add("invisivel");

        img2.classList.remove("invisivel");
        img2.classList.add("visivel");
    } else {
        img1.classList.remove("invisivel");
        img1.classList.add("visivel");

        img2.classList.remove("visivel");
        img2.classList.add("invisivel");
    }

    mostrandoImagem1 = !mostrandoImagem1;
}

