
const abas = document.querySelectorAll('.tab')

abas.forEach(tab => {
    tab.addEventListener('click', () => {

        if (tab.classList.contains('selected')) {
            return;
        }
        
        selecionarAbas(tab)

        selecionarInformações(tab)
      
    })
})


function selecionarAbas(tab) {
    const abaSelecionada = document.querySelector('.tab.selected')
    const informacaoSelecionada = document.querySelector('.information.selected')

    abaSelecionada.classList.remove('selected')
    tab.classList.add('selected')
    informacaoSelecionada.classList.remove('selected')
}

function selecionarInformações(tab) {
    
    const idDoElementoDeInformacoesDaAba = `information-${tab.id}`
    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)


    informacaoASerMostrada.classList.add('selected')

}