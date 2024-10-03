/**
 * Imprime o resultado da contagem de vogais em uma palavra
 * @remarks
 * Essa função exibe uma mensagem no console que mostra a palavra e o número de vogais que ela contém.
 * 
 * @param palavra - A palavra de entrada cuja contagem será exibida
 * @param vogaisContadas - O número de vogais contadas na palavra 
 * @returns Não retorna valor (void)
 */
function imprimeResultado(palavra: string, vogaisContadas: number): void{
    console.log(`A palavra ${palavra} tem: ${vogaisContadas} vogais`)
}

/**
 * Função que testa se a entrada recebida é do tipo string e é válida pelo teste regex
 * @remarks
 * O regex `^[a-zA-ZÀ-ÿ]+$` verifica se a string contém apenas letras, incluindo acentos.
 * @param stringTestada - A string que será validada
 * @returns Retorna `true` se for válida, ou `false` se for inválida
 */
function validaString(stringTestada : string): boolean {
    return /^[a-zA-ZÀ-ÿ]+$/.test(stringTestada);
}

/**
 * Conta o número de vogais em uma palavra fornecida.
 * @remarks
 * Esta função considera as vogais acentuadas (AÁÂÃEÉÊIÍÎOÓÔÕUÚÛ) 
 * e não diferencia entre maiúsculas e minúsculas.
 *
 * @param palavra - A palavra na qual contar as vogais.
 * @returns O número de vogais na palavra fornecida.
 */
function contaVogais(palavra: string): number{
    const vogaisBase: string = "AÁÂÃEÉÊIÍÎOÓÔÕUÚÛ"
    let contador: number = 0

    for (let letra of palavra.toUpperCase()){
        if (vogaisBase.includes(letra)){
            contador++
        }
    }
    return contador
}

//cenario a)
const palavraPreDefinida: string = "Liara"
const vogaisContadas: number = contaVogais(palavraPreDefinida)
imprimeResultado(palavraPreDefinida, vogaisContadas)

//cenario b) 
let palavraInput: string

do {
    palavraInput = prompt("Digite a palavra a ser contada: ") || ""
} while(!validaString(palavraInput))

let vogaisContadasInput = contaVogais(palavraInput)
imprimeResultado(palavraInput, vogaisContadasInput)