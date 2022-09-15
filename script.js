//Seletores
//let palavras = ["ALURA", "ORACLE", "FORCA", "JAVASCRIPT", "LOGICA"]
let palavras = ["ABAB"]
let tabuleiro = document.getElementById('forca').getContext('2d')
let palavraSecreta = "";

function sorteiaPalavra() {
    let palavra = palavras[Math.floor(Math.random() * palavras.length)]
    palavraSecreta = palavra
    console.log(palavra)
}

function verificaLetra() {
    document.addEventListener('keypress', (event) => {
        let chave = event.key.toUpperCase()

        if (chave.length == 1 && chave.match(/[a-z]/i)) {
            const indexes = []
            
           if (palavraSecreta.includes(chave)) {
            for (let i = 0; i < palavraSecreta.length; i++) {
                if (palavraSecreta[i] === chave) {
                indexes.push(i) }} //Irá enviar para a const indexes a posição das letras repetidas, caso haja.

                for (let p = 0; p < indexes.length; p++){
                    desenhaLetra(chave, indexes[p]) //Desenha as letras usando as posições presentes no index.
                }
            }
        }
    }
    )}

function desenhaLetra(letra, pos) {
    let largura = 600/palavraSecreta.length
    tabuleiro.fillStyle = 'black'
    tabuleiro.font = '60px san-serif';
    tabuleiro.fillText(letra, 500+(largura*pos), 600)
}

function iniciarJogo() {
    document.getElementById('desaparece').style.display = 'none'
    document.getElementById('forca').style.display = 'block'
    sorteiaPalavra()
    desenhaCanvas()
    desenhaLinhas()
    verificaLetra()
}