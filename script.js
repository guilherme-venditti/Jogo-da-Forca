//Seletores
let palavras = ["ALURA", "ORACLE", "FORCA", "JAVASCRIPT", "LOGICA"]
let tabuleiro = document.getElementById('forca').getContext('2d')
let palavraSecreta = "";

function sorteiaPalavra() {
    let palavra = palavras[Math.floor(Math.random() * palavras.length)]
    palavraSecreta = palavra
    console.log(palavra)
}

function verificaLetra() {
    document.addEventListener('keypress', (event) => {
        let chave = event.key

        if (chave.length == 1 && chave.match(/[a-z]/)) {
            window.alert(chave)
        }
    })
}

function iniciarJogo() {
    document.getElementById('desaparece').style.display = 'none'
    document.getElementById('forca').style.display = 'block'
    sorteiaPalavra()
    desenhaCanvas()
    desenhaLinhas()
    verificaLetra()
}