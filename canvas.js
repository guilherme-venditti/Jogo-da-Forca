function desenhaCanvas() {
    tabuleiro.lineWidth = 8;
    tabuleiro.lineCap = 'round'
    tabuleiro.lineJoin = 'round'
    tabuleiro.fillStyle = "#f3f5fc"
    tabuleiro.strokeStyle  = "#0A3871"

    tabuleiro.fillRect(0,0, 1200, 800);
    tabuleiro.beginPath()
    tabuleiro.moveTo(725, 500);
    tabuleiro.lineTo(475, 500);
    tabuleiro.stroke()
    tabuleiro.closePath()
    
    tabuleiro.beginPath()
    tabuleiro.moveTo(500, 500);
    tabuleiro.lineTo(500, 100);
    tabuleiro.lineTo(675, 100);
    tabuleiro.lineTo(675, 150);
    tabuleiro.stroke()
}

function desenhaLinhas() {
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = 'round'
    tabuleiro.lineJoin = 'round'
    tabuleiro.fillStyle = "#F3F5FC"
    tabuleiro.strokeStyle  = "#0A3871"

    let largura = 600/palavraSecreta.length
    for(let i = 0; i < palavraSecreta.length; i++) {
        tabuleiro.moveTo(325+(largura*i), 640)
        tabuleiro.lineTo(375+(largura*i), 640)
    }
    tabuleiro.stroke()
    tabuleiro.closePath()
}

function desenhaCabeca() {
    tabuleiro.strokeStyle = 'blue';
    tabuleiro.beginPath();
    tabuleiro.arc(675, 182, 32, 0, 2 * 3.14);
    tabuleiro.stroke();
}

function desenhaCorpo() {
    tabuleiro.fillStyle = 'blue'
    tabuleiro.lineWidth = 6
    tabuleiro.beginPath()
    tabuleiro.moveTo(675, 214)
    tabuleiro.lineTo(675, 364)
    tabuleiro.stroke()
    tabuleiro.closePath()
}

function desenhaBracoDir() {
    tabuleiro.beginPath()
    tabuleiro.moveTo(675, 214)
    tabuleiro.lineTo(725, 314)
    tabuleiro.stroke()
    tabuleiro.closePath()
}

function desenhaBracoEsq() {
    tabuleiro.beginPath()
    tabuleiro.moveTo(675, 214)
    tabuleiro.lineTo(625, 314)
    tabuleiro.stroke()
    tabuleiro.closePath()
}

function desenhaPernaDir() {
    tabuleiro.beginPath()
    tabuleiro.moveTo(675, 364)
    tabuleiro.lineTo(625, 464)
    tabuleiro.stroke()
    tabuleiro.closePath()
}

function desenhaPernaEsq() {
    tabuleiro.beginPath()
    tabuleiro.moveTo(675, 364)
    tabuleiro.lineTo(725, 464)
    tabuleiro.stroke()
    tabuleiro.closePath()
}

function escreveVencedor() {
    tabuleiro.fillStyle = 'green'
    tabuleiro.font = '60px san-serif';
    tabuleiro.fillText('Você venceu o jogo!', 700, 289)
}

function escrevePerdedor() {
    tabuleiro.fillStyle = 'red'
    tabuleiro.font = '60px san-serif';
    tabuleiro.fillText('Você perdeu o jogo!', 700, 289)
}