import { validaString, contaVogais } from './questaoVogais.js'
/**
 * Imprime o resultado da contagem de vogais em uma palavra
 * @remarks
 * Essa função exibe uma mensagem no console que mostra a palavra e o número de vogais que ela contém.
 * 
 * @param palavra - A palavra de entrada cuja contagem será exibida
 * @param vogaisContadas - O número de vogais contadas na palavra 
 * @returns Não retorna valor (void)
 */
function imprimeResultadoWeb(palavra: string, vogaisContadas: number): void {
    const elementoResultado: HTMLElement | null = document.getElementById("resultado")
    if (elementoResultado) { 
        elementoResultado.textContent = `A palavra ${palavra} tem: ${vogaisContadas} vogais.`
    }
}

/**
 * Manipulador de evento para o formulário de contar vogais.
 */
document.getElementById('formularioVogais')?.addEventListener('submit', function(evento: Event): void {
    evento.preventDefault()

    const palavraInput: string = (document.getElementById('palavraInput') as HTMLInputElement)?.value

    if (!validaString(palavraInput)) {
        alert("Por favor, digite apenas letras.")
        return
    }

    const vogaisContadas: number = contaVogais(palavraInput)

    imprimeResultadoWeb(palavraInput, vogaisContadas)
})
