//Aplicar o tema salvo
if (localStorage.getItem("tema") === "dark") {
  document.body.classList.add("dark");
}

//Trocar o tema
function trocarTema() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("tema", "dark");
  } else {
    localStorage.setItem("tema", "light");
  }
}

// Fetch na API Local
function buscarFrase() {
    fetch("dados.json")
        .then(res => res.json())
        .then(dados => {
            document.getElementById("frase").innerHTML = `
                <h3>${dados.titulo}</h3>
                <p>${dados.texto}</p>
            `;
        })
        .catch(() => {
            document.getElementById("frase").innerHTML = `
                <p>Erro ao carregar a frase.</p>
            `;
        });
}
