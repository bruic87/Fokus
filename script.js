const html = document.querySelector('html')
const banner = document.querySelector('.app__image')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('app__card-button--curto')
const longoBt = document.querySelector('app__card-button--longo')
const titulo = document.querySelector('.app__title')

function foco() {    
    alterarContexto('foco')
}

function curto() {    
    alterarContexto('descanso-curto')
}

function longo() {    
    alterarContexto('descanso-longo')
}

function alterarContexto (contexto) {
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