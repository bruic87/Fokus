const html = document.querySelector('html')
const banner = document.querySelector('.app__image')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('app__card-button--curto')
const longoBt = document.querySelector('app__card-button--longo')
const titulo = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const startPauseBt = document.querySelector('#start-pause')

const musicaFocoInput = querySelector('#alternar-musica')
const musica = new Audio('/sons/luna-rise-part-one.mp3')
const audioPlay = new Audio('/sons/play.wav');
const audioPausa = new Audio('/sons/pause.mp3');
const audioTempoFinalizado = new Audio('./sons/beep.mp3')


let tempoDecorridoEmSegundos = 5
let intervaloId = null

musica.loop = true

musicaFocoInput.addEventListener('change', () => {
    if(musica.paused) {
        musica.play()
    } else {
        musica.pause()
    }
}) 

function foco() {    
    alterarContexto('foco')
    focoBt.classList.add('active')
}

function curto() {    
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')
}

function longo() {    
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')
}


function alterarContexto (contexto) {
    botoes.forEach(function(contexto){
        contexto.classList.remove('acitve')
    })
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `/imagens/${contexto}.png`)
    switch (contexto) {
        case 'foco':
            titulo.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;
            
        case 'descanso-curto':
            titulo.innerHTML = `Que tal dar uma respirada?<br> 
            <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            break;
                
        case 'descanso-longo':
            titulo.innerHTML = `Hora de voltar à superfície.<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>`
                    
        default:
            break;
    }
}

const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0){
        audioTempoFinalizado.play();
        zerar()
        alert('Tempo finalizado')
        return
    }
    tempoDecorridoEmSegundos -= 1
    console.log(`Tempo: ${tempoDecorridoEmSegundos}`)
    console.log(`Id: ${intervaloId}`)
}

startPauseBt.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar() {
    if(intervaloId){
        audioPause.play();
        zerar()
        return
    }
    audioPlay.play();
    intervaloId = setInterval(contagemRegressiva, 1000)
}

function zerar() {
    clearInterval(intervaloId)
    intervaloId = null
}