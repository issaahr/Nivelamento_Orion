import { lista, Pessoa, consultaBioPeloIDModoImperativo, consultaNomePeloIDModoImperativo, apagaItemPeloIDModoImperativo, alteracaoPeloIDModoImperativo } from './biografia.js'
let biografiasVisiveis: boolean = false 

/**
 * Atualiza a lista de biografias exibida na página da web.
 * 
 * Esta função alterna a visibilidade de uma lista de biografias. Quando as biografias
 * estão visíveis, ela as esconde e altera o texto do botão para "Mostrar todas as biografias".
 * Quando as biografias estão ocultas, ela as exibe e altera o texto do botão para 
 * "Esconder todas as biografias".
 * 
 * A função utiliza a variável global `biografiasVisiveis` que acompanha o
 * estado atual de visibilidade das biografias, e `lista`que é um array importado de biografia.ts
 * 
 * 
 * @remarks
 * - A função modifica o innerHTML do elemento `divBiografias` para mostrar ou esconder 
 *   as biografias.
 * - A função atualiza o texto do botão `botaoMostrarBiografias` 
 *   para refletir a ação atual (mostrar ou esconder biografias).
 * 
 * @returns Não retorna valor - void
 */
function atualizarListaBiografias(): void {
    const divBiografias: HTMLElement | null  = document.getElementById('todasBiografias')
    const botaoMostrarBiografias: HTMLElement | null = document.getElementById('botaoMostrarBiografias')

    if (divBiografias && botaoMostrarBiografias) {
        if (biografiasVisiveis) {
            divBiografias.innerHTML = '' 
            botaoMostrarBiografias.textContent = 'Mostrar todas as biografias'  
        } else {
            lista.forEach((pessoa: Pessoa) => {
                divBiografias.innerHTML += `<p>ID: ${pessoa.id} - Nome: ${pessoa.name}<br>Bio: ${pessoa.bio}</p>`
            })
            botaoMostrarBiografias.textContent = 'Esconder todas as biografias'  
        }
        biografiasVisiveis = !biografiasVisiveis  
    }
}

document.addEventListener('DOMContentLoaded', (): void => {
    const botaoMostrarBiografias: HTMLElement | null = document.getElementById('botaoMostrarBiografias')
    botaoMostrarBiografias?.addEventListener('click', atualizarListaBiografias)

    const botaoConsultaBio: HTMLElement | null = document.getElementById('botaoConsultaBio')
    botaoConsultaBio?.addEventListener('click', (): void => {
        const input = document.getElementById('inputConsultaBioID') as HTMLInputElement
        const resultado: string = consultaBioPeloIDModoImperativo(parseInt(input.value))
        const divResultado: HTMLElement | null = document.getElementById('resultadoConsultaBio')
        if (divResultado) {
            divResultado.textContent = resultado
        }
    })

    const botaoConsultaNome: HTMLElement | null = document.getElementById('botaoConsultaNome')
    botaoConsultaNome?.addEventListener('click', (): void => {
        const input = document.getElementById('inputConsultaNomeID') as HTMLInputElement
        const resultado: string = consultaNomePeloIDModoImperativo(parseInt(input.value))
        const divResultado: HTMLElement | null = document.getElementById('resultadoConsultaNome')
        if (divResultado) {
            divResultado.textContent = resultado
        }
    })

    const botaoRemover: HTMLElement | null = document.getElementById('botaoRemover')
    botaoRemover?.addEventListener('click', (): void => {
        const input = document.getElementById('inputRemoveID') as HTMLInputElement
        apagaItemPeloIDModoImperativo(parseInt(input.value))
        atualizarListaBiografias()
    })

    const botaoAlterar: HTMLElement | null = document.getElementById('botaoAlterar')
    botaoAlterar?.addEventListener('click', (): void => {
        const inputID = document.getElementById('inputAlterarID') as HTMLInputElement
        const inputNovoNome = document.getElementById('inputNovoNome') as HTMLInputElement
        const inputNovaBio = document.getElementById('inputNovaBio') as HTMLInputElement
        alteracaoPeloIDModoImperativo(parseInt(inputID.value), inputNovoNome.value, inputNovaBio.value)
        atualizarListaBiografias()
    })
})
