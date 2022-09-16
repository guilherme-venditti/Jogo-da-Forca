//Seletores
//let palavras = ["ALURA", "ORACLE", "FORCA", "JAVASCRIPT", "LOGICA"]
let palavras = ["JAVASCRIPT"]
let tabuleiro = document.getElementById('forca').getContext('2d')
let palavraSecreta = "";
let erros = 0
let acertos = 0
let letrasErradas = []
let letrasAcertadas = []

window.onkeypress = jogar

function sorteiaPalavra() {
    let palavra = palavras[Math.floor(Math.random() * palavras.length)]
    palavraSecreta = palavra
    console.log(palavra)
}

function jogar() {
    let chave = event.key.toUpperCase()
    
        if (chave.length == 1 && chave.match(/[a-z]/i)) {
                const indexes = []
                
            //Irá enviar para a const indexes a posição das letras repetidas, caso haja.
            if (palavraSecreta.includes(chave)) {
                if (letrasAcertadas.indexOf(chave) == -1) { //Ou seja, se a letra não tiver sido digitada antes
                    letrasAcertadas.push(chave)
                    for (let i = 0; i < palavraSecreta.length; i++) { //Irá verificar a quantia de vezes que a letra se repete na string para desenhar quantas vezes for preciso e contabilizar corretamente os acertos.
                        if (palavraSecreta[i] == chave) {
                            indexes.push(i) 
                            acertos++
                            console.log(`Acertos: ${acertos}`)
                        }  
                    } 
                    //Desenha as letras usando as posições presentes no index.
                    for (let p = 0; p < indexes.length; p++){
                        desenhaLetra(chave, indexes[p])
                    } 
                    verificaJogo()
                }   
            } else {
                if (letrasErradas.indexOf(chave) == -1) {
                    desenhaLetraErrada(chave, erros)
                    erros++
                    letrasErradas.push(chave)
                }
                verificaJogo()
               
               console.log(erros)
            }
        }
    }

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
    erros = 0
    acertos = 0
    letrasErradas = []
    letrasAcertadas = []
    window.onkeypress = jogar

    document.getElementById('desaparece').style.display = 'none'
    document.getElementById('forca').style.display = 'block'
    document.getElementById('fim-de-jogo').style.display = 'inline-block'
    sorteiaPalavra()
    desenhaCanvas()
    desenhaLinhas()
}

function verificaJogo() {
    
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
               }
    
    if (erros >= 6) {
        window.onkeypress = null
        escrevePerdedor()

    } else if (acertos == palavraSecreta.length) {
        window.onkeypress = null
        escreveVencedor()
    }
}

function desistir() {
    document.getElementById('desaparece').style.display = 'block'
    document.getElementById('forca').style.display = 'none'
    document.getElementById('fim-de-jogo').style.display = 'none'
}
