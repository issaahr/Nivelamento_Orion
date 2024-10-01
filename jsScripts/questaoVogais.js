"use strict";
//Função que imprime os resultados
function imprimeResultado(palavra, vogaisContadas) {
    console.log(`A palavra ${palavra} tem: ${vogaisContadas} vogais`);
}
/* Função que testa se a entrada recebida é do tipo string
 * ^[a-zA-ZÀ-ÿ]+$ teste regex p/ verificar se a string contem só letras
*/
function validaString(stringTestada) {
    return /^[a-zA-ZÀ-ÿ]+$/.test(stringTestada);
}
// Função que faz a contagem das vogais
function contaVogais(palavra) {
    const vogaisBase = "AÁÂÃEÉÊIÍÎOÓÔÕUÚÛ";
    let contador = 0;
    for (let letra of palavra.toUpperCase()) {
        if (vogaisBase.includes(letra)) {
            contador++;
        }
    }
    return contador;
}
//cenario a)
const palavraPreDefinida = "Liara";
const vogaisContadas = contaVogais(palavraPreDefinida);
imprimeResultado(palavraPreDefinida, vogaisContadas);
//cenario b) 
let palavraInput;
do {
    palavraInput = prompt("Digite a palavra a ser contada: ") || "";
} while (!validaString(palavraInput));
let vogaisContadasInput = contaVogais(palavraInput);
imprimeResultado(palavraInput, vogaisContadasInput);
