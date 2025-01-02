function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show'); // Adiciona ou remove a classe "show" no menu
}

function mostrarMusica(titulo) {
    const titulos = {
        musica1: {
            titulo: "Título da Música 1",
            conteudo: "Cifra ou letra da Música 1\nAm C Dm G"
        },
        musica2: {
            titulo: "Título da Música 2",
            conteudo: "Cifra ou letra da Música 2\nG Em C D"
        },
        musica3: {
            titulo: "Título da Música 3",
            conteudo: "Cifra ou letra da Música 3\nC G Am F"
        }
    };

    const musicaSelecionada = titulos[titulo];
    if (musicaSelecionada) {
        document.getElementById('titulo-musica').textContent = musicaSelecionada.titulo;
        document.getElementById('conteudo-musica').textContent = musicaSelecionada.conteudo;
    }
}

function toggleLista() {
    const colunaEsquerda = document.getElementById('colunaEsquerda');
    colunaEsquerda.classList.toggle('mostrar'); // Adiciona ou remove a classe 'mostrar'
}