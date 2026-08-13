document.addEventListener("DOMContentLoaded", () => {
    const data = document.getElementById("data-publicacao");

    // Data definida para a publicação da notícia.
    const dataPublicacao = new Date(2026, 7, 13);

    const opcoes = {
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    data.textContent = dataPublicacao
        .toLocaleDateString("pt-BR", opcoes)
        .replace(" de ", " de ")
        .replace(/^(\d+) de /, "$1 de ");
});