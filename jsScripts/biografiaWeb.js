import { lista, consultaBioPeloIDModoImperativo, consultaNomePeloIDModoImperativo, apagaItemPeloIDModoImperativo, alteracaoPeloIDModoImperativo } from './biografia.js';
let biografiasVisiveis = false;
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
function atualizarListaBiografias() {
    const divBiografias = document.getElementById('todasBiografias');
    const botaoMostrarBiografias = document.getElementById('botaoMostrarBiografias');
    if (divBiografias && botaoMostrarBiografias) {
        if (biografiasVisiveis) {
            divBiografias.innerHTML = '';
            botaoMostrarBiografias.textContent = 'Mostrar todas as biografias';
        }
        else {
            lista.forEach((pessoa) => {
                divBiografias.innerHTML += `<p>ID: ${pessoa.id} - Nome: ${pessoa.name}<br>Bio: ${pessoa.bio}</p>`;
            });
            botaoMostrarBiografias.textContent = 'Esconder todas as biografias';
        }
        biografiasVisiveis = !biografiasVisiveis;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const botaoMostrarBiografias = document.getElementById('botaoMostrarBiografias');
    botaoMostrarBiografias === null || botaoMostrarBiografias === void 0 ? void 0 : botaoMostrarBiografias.addEventListener('click', atualizarListaBiografias);
    const botaoConsultaBio = document.getElementById('botaoConsultaBio');
    botaoConsultaBio === null || botaoConsultaBio === void 0 ? void 0 : botaoConsultaBio.addEventListener('click', () => {
        const input = document.getElementById('inputConsultaBioID');
        const resultado = consultaBioPeloIDModoImperativo(parseInt(input.value));
        const divResultado = document.getElementById('resultadoConsultaBio');
        if (divResultado) {
            divResultado.textContent = resultado;
        }
    });
    const botaoConsultaNome = document.getElementById('botaoConsultaNome');
    botaoConsultaNome === null || botaoConsultaNome === void 0 ? void 0 : botaoConsultaNome.addEventListener('click', () => {
        const input = document.getElementById('inputConsultaNomeID');
        const resultado = consultaNomePeloIDModoImperativo(parseInt(input.value));
        const divResultado = document.getElementById('resultadoConsultaNome');
        if (divResultado) {
            divResultado.textContent = resultado;
        }
    });
    const botaoRemover = document.getElementById('botaoRemover');
    botaoRemover === null || botaoRemover === void 0 ? void 0 : botaoRemover.addEventListener('click', () => {
        const input = document.getElementById('inputRemoveID');
        apagaItemPeloIDModoImperativo(parseInt(input.value));
        atualizarListaBiografias();
    });
    const botaoAlterar = document.getElementById('botaoAlterar');
    botaoAlterar === null || botaoAlterar === void 0 ? void 0 : botaoAlterar.addEventListener('click', () => {
        const inputID = document.getElementById('inputAlterarID');
        const inputNovoNome = document.getElementById('inputNovoNome');
        const inputNovaBio = document.getElementById('inputNovaBio');
        alteracaoPeloIDModoImperativo(parseInt(inputID.value), inputNovoNome.value, inputNovaBio.value);
        atualizarListaBiografias();
    });
});
