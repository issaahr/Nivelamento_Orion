//Função que imprime os resultados
function imprimeResultado(palavra: string, vogaisContadas: number): void{
    console.log(`A palavra ${palavra} tem: ${vogaisContadas} vogais`)
}

/* Função que testa se a entrada recebida é do tipo string
 * ^[a-zA-ZÀ-ÿ]+$ teste regex p/ verificar se a string contem só letras
*/
function validaString(stringTestada : string): boolean {
    return /^[a-zA-ZÀ-ÿ]+$/.test(stringTestada);
}

// Função que faz a contagem das vogais
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
const palavraPreDefinida = "Liara"
const vogaisContadas : number = contaVogais(palavraPreDefinida)
imprimeResultado(palavraPreDefinida, vogaisContadas)

//cenario b) 
let palavraInput: string

do {
    palavraInput = prompt("Digite a palavra a ser contada: ") || ""
} while(!validaString(palavraInput))

let vogaisContadasInput = contaVogais(palavraInput)
imprimeResultado(palavraInput, vogaisContadasInput)