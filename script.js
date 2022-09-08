//Seletores
let palavras = ["ALURA", "ORACLE", "FORCA", "JAVASCRIPT", "LOGICA"]
let tabuleiro = document.getElementById('forca').getContext('2d')
let palavraSecreta = "";

function sorteiaPalavra() {
    let palavra = palavras[Math.floor(Math.random() * palavras.length)]
    palavraSecreta = palavra
    console.log(palavra)
}


function iniciarJogo() {
    document.getElementById('desaparece').style.display = 'none'
    sorteiaPalavra()
    desenhaCanvas()
    desenhaLinhas()
}

