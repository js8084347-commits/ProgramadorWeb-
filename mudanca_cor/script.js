const botao = document.getElementById("btnTema");
const body = document.body;

// Carrega tema salvo
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo) {
    body.classList.add(temaSalvo);
} else {
    body.classList.add("tema-claro");
}

// Atualiza ícone inicial
botao.textContent = body.classList.contains("tema-escuro") ? "☀️" : "🌙";

// Troca de tema com animação
botao.addEventListener("click", () => {
    body.classList.toggle("tema-claro");
    body.classList.toggle("tema-escuro");

    const temaAtual = body.classList.contains("tema-escuro") ? "tema-escuro" : "tema-claro";
    localStorage.setItem("tema", temaAtual);

    // Troca do ícone
    botao.textContent = temaAtual === "tema-escuro" ? "☀️" : "🌙";
});
