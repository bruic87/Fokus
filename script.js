const html = document.querySelector('html')
const focoBt = document.querySelector('.app_card-button--foco')
const curtoBt = document.querySelector('app_card-button--curto')
const longoBt = document.querySelector('app_card-button--longo')

focoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
})

curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
})

longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
})