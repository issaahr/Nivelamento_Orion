var _a;
import { validaString, contaVogais } from './questaoVogais.js';
/**
 * Imprime o resultado da contagem de vogais em uma palavra
 * @remarks
 * Essa função exibe uma mensagem no console que mostra a palavra e o número de vogais que ela contém.
 *
 * @param palavra - A palavra de entrada cuja contagem será exibida
 * @param vogaisContadas - O número de vogais contadas na palavra
 * @returns Não retorna valor (void)
 */
function imprimeResultadoWeb(palavra, vogaisContadas) {
    const elementoResultado = document.getElementById("resultado");
    if (elementoResultado) {
        elementoResultado.textContent = `A palavra ${palavra} tem: ${vogaisContadas} vogais.`;
    }
}
/**
 * Manipulador de evento para o formulário de contar vogais.
 */
(_a = document.getElementById('formularioVogais')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (evento) {
    var _a;
    evento.preventDefault();
    const palavraInput = (_a = document.getElementById('palavraInput')) === null || _a === void 0 ? void 0 : _a.value;
    if (!validaString(palavraInput)) {
        alert("Por favor, digite apenas letras.");
        return;
    }
    const vogaisContadas = contaVogais(palavraInput);
    imprimeResultadoWeb(palavraInput, vogaisContadas);
});
