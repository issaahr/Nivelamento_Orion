export interface Pessoa{
    id: number;
    name: string;
    bio: string;
}

export let lista: Array<Pessoa> = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
    ];

/**
 * Imprime todas as biografias da lista no console.
 * Para cada pessoa na lista, esta função exibe o ID, nome e biografia.
 * @returns Não retorna nada (void)
 */
const imprimirTodasBiografias = (): void => {
    lista.forEach(pessoa => {console.log(`ID: ${pessoa.id}, Nome: ${pessoa.name}, Bio: ${pessoa.bio} \n`)})
}    

/*********************************
*   VERSÃO PARADIGMA FUNCIONAL   *
*********************************/ 
/**
 * Consulta a biografia de uma pessoa pelo ID.
 *
 * @param id - o ID da pessoa a ser consultada.
 * @returns A biografia da pessoa correspondente ao ID, ou `ID não localizado` se o ID não for encontrado.
 */
const consultaBioPeloID = (id: number): string => {
    const pessoa = lista.find(item => item.id === id)
    return pessoa ? pessoa.bio : "ID não localizado"
}

/**
 * Consulta o nome de uma pessoa pelo seu ID.
 *
 * @param  id - O ID da pessoa a ser consultada.
 * @returns O nome da pessoa correspondente ao ID fornecido, ou `ID não localizado` se o ID não for encontrado.
 */
const consultaNomePeloID = (id: number) : string => {
    const pessoa = lista.find(item => item.id === id)
    return pessoa ? pessoa.name : "ID não localizado"
}

/**
 * Remove um item da lista pelo seu ID.
 *
 * @param id - O ID do item a ser removido.
 * @returns Uma nova lista sem o item com o ID especificado.
 */
const apagaItemPeloID = (id:number) : Array<Pessoa> => lista.filter(item => item.id !== id)


/**
 * Altera o nome e/ou a biografia de uma pessoa na lista com base no ID fornecido. Caso ele exista.
 *
 * @param id - O ID da pessoa a ser alterada.
 * @param novoNome - O novo nome a ser atribuído à pessoa (opcional).
 * @param  novaBio - A nova biografia a ser atribuída à pessoa (opcional).
 * @returns Uma nova lista de pessoas com as alterações aplicadas.
 */
const alteracaoPeloID = (id: number, novoNome?: string, novaBio?: string): Array<Pessoa> => {
    return lista.map(item => {
        if (item.id === id) {
            return {
                ...item,
                name: novoNome !== undefined ? novoNome : item.name,
                bio: novaBio !== undefined ? novaBio : item.bio,
            };
        }
        return item;
    });
};

/*
// Demonstração
imprimirTodasBiografias()

const idConsultaBio = 1
console.log(`Bio: ${consultaBioPeloID(idConsultaBio)}`) // bio de Ada Lovelace

const idConsultaNome = 2
console.log(`Nome: ${consultaNomePeloID(idConsultaNome)}`) // nome Alan Turing 


lista = apagaItemPeloID(4) // Apaga o item 4
imprimirTodasBiografias()

const idAlvoAtualizacao = 3
const nomeAtualizado = "Albert Einstein"
const bioAtualizada = "Albert Einstein, foi um físico teórico que desenvolveu a teoria da relatividade e revolucionou a física moderna."

lista = alteracaoPeloID(idAlvoAtualizacao, nomeAtualizado, bioAtualizada)
imprimirTodasBiografias()

*/

/*********************************
*   VERSÃO PARADIGMA IMPERATIVO   *
*********************************/ 
/**
 * Consulta a biografia de uma pessoa pelo ID.
 *
 * @param id - o ID da pessoa a ser consultada.
 * @returns A biografia da pessoa correspondente ao ID, ou `ID não localizado` se o ID não for encontrado.
 */
export function consultaBioPeloIDModoImperativo(id:number): string{
    for (let i = 0; i < lista.length; i++){
        if (lista[i].id === id){
            return lista[i].bio
        }
    }
    return "ID não localizado"
}

/**
 * Consulta o nome de uma pessoa pelo seu ID.
 *
 * @param  id - O ID da pessoa a ser consultada.
 * @returns O nome da pessoa correspondente ao ID fornecido, ou `ID não localizado` se o ID não for encontrado.
 */
export function consultaNomePeloIDModoImperativo(id:number): string{
    for (let i = 0; i < lista.length; i++){
        if (lista[i].id === id){
            return lista[i].name
        }
    }
    return "ID não localizado"
}


/**
 * Apaga um item da lista pelo ID 
 *
 * @param id - O ID do item que será removido.
 */
export function apagaItemPeloIDModoImperativo(id:number): void{
    for (let i = 0; i < lista.length; i++){
        if (lista[i].id === id){
            lista.splice(i,1)
            break
        }
    }
}

/**
 * Altera o nome e/ou a biografia de uma pessoa na lista com base no ID fornecido.
 *
 * @param id - O ID da pessoa a ser alterada.
 * @param novoNome - O novo nome a ser atribuído à pessoa (opcional).
 * @param  novaBio - A nova biografia a ser atribuída à pessoa (opcional).
 * @returns A lista de pessoas com as alterações aplicadas.
 */
export function alteracaoPeloIDModoImperativo(id: number, novoNome?: string | undefined , novaBio?:string | undefined): void{
    let idEncontrado = false;

    for (let i = 0; i< lista.length; i++){
        if (lista[i].id == id){
            idEncontrado = true
            if (novoNome !== undefined && novoNome?.trim() !== ""){
                lista[i].name = novoNome
            }
            if (novaBio !== undefined && novaBio.trim() !== ""){
                lista[i].bio = novaBio
            }            
            break;
        }
    }
    if(!idEncontrado){
        console.log(`ID não localizado`)
    }
}
    
/*
// Demonstração
imprimirTodasBiografias()

console.log(`Bio: ${consultaBioPeloIDModoImperativo(1)}`) // bio de Ada Lovelace
console.log(`Nome: ${consultaNomePeloIDModoImperativo(2)}`) // Nome Alan Turing 

apagaItemPeloIDModoImperativo(1) // Apaga o item 1
imprimirTodasBiografias()

alteracaoPeloIDModoImperativo(3, "Charles Darwin", "Charles Darwin, foi um Naturalista que propôs a teoria da evolução através da seleção natural.")
imprimirTodasBiografias()
*/