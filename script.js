//Seletores
//let palavras = ["ALURA", "ORACLE", "FORCA", "JAVASCRIPT", "LOGICA"]
let palavras = ["JAVASCRIPT"]
let tabuleiro = document.getElementById('forca').getContext('2d')
let palavraSecreta = "";

function sorteiaPalavra() {
    let palavra = palavras[Math.floor(Math.random() * palavras.length)]
    palavraSecreta = palavra
    console.log(palavra)
}

function jogar() {
    let erros = 0;
    let letrasErradas = []
    document.addEventListener('keypress', (event) => {
    let chave = event.key.toUpperCase()
    
        if (chave.length == 1 && chave.match(/[a-z]/i)) {
                const indexes = []
                
            //Irá enviar para a const indexes a posição das letras repetidas, caso haja.
            if (palavraSecreta.includes(chave)) {
                for (let i = 0; i < palavraSecreta.length; i++) {
                    if (palavraSecreta[i] === chave) {
                    indexes.push(i) }} 

                    //Desenha as letras usando as posições presentes no index.
                    for (let p = 0; p < indexes.length; p++){
                        desenhaLetra(chave, indexes[p])
                }   
            } else {
                if (letrasErradas.indexOf(chave) == -1) {
                desenhaLetraErrada(chave, erros)
                erros++
                letrasErradas.push(chave)
               }

               if (erros == 1) {
                desenhaCabeca()
               } else if (erros == 2) {
                desenhaCorpo()
               } else if (erros == 3) {
                desenhaBracoDir()
               } else if (erros == 4) {
                desenhaBracoEsq()
               } else if (erros == 5) {
                desenhaPernaEsq()
               } else if (erros >= 6) {
                desenhaPernaDir()
                //adicionar função que finaliza jogo
               }
               
               console.log(erros)
            }
        }
    }
)}

function desenhaLetra(letra, pos) {
    let largura = 600/palavraSecreta.length
    tabuleiro.fillStyle = 'black'
    tabuleiro.font = '60px san-serif';
    tabuleiro.fillText(letra, 325+(largura*pos), 600)
}

function desenhaLetraErrada(letra, tentativa) {
    let largura = 600/palavraSecreta.length
    tabuleiro.fillStyle = 'red'
    tabuleiro.font = '60px san-serif';
    tabuleiro.fillText(letra, 325+(largura*tentativa), 710)

}

function iniciarJogo() {
    document.getElementById('desaparece').style.display = 'none'
    document.getElementById('forca').style.display = 'block'
    sorteiaPalavra()
    desenhaCanvas()
    desenhaLinhas()
    jogar()
}