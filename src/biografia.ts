interface Pessoa{
    id: number;
    name: string;
    bio: string;
}

let lista: Array<Pessoa> = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
    ];

const imprimirTodasBiografias = () => {
    lista.forEach(pessoa => {console.log(`ID: ${pessoa.id}, Nome: ${pessoa.name}, Bio: ${pessoa.bio} \n`)})
}    


/*********************************
*   VERSÃO PARADIGMA FUNCIONAL   *
*********************************/ 
//Consulta bio a partir do ID


const consultaBioPeloID = (id: number) => {
    const pessoa = lista.find(item => item.id === id)
    return pessoa ? pessoa.bio : "ID não localizado"
}

//Consulta nome a partir do ID
const consultaNomePeloID = (id: number) => {
    const pessoa = lista.find(item => item.id === id)
    return pessoa ? pessoa.name : "ID não localizado"
}

//Apaga item a partir do ID
const apagaItemPeloID = (id:number) => lista.filter(item => item.id !== id)

//Altera bio ou o nome a partir do ID
const alteracaoPeloID = (id: number, novoNome?: string, novaBio?:string) => {
    return lista.map(item => {
        if (item.id === id){
            return {
                ...item,
                name: novoNome !== undefined ? novoNome : item.name,
                bio: novaBio !== undefined ? novaBio : item.bio,
            }
        }
        return item
    })
}


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



/*********************************
*   VERSÃO PARADIGMA IMPERATIVO   *
*********************************/ 
//Consulta bio a partir de um ID
function consultaBioPeloIDModoImperativo(id:number): string{
    for (let i = 0; i < lista.length; i++){
        if (lista[i].id === id){
            return lista[i].bio
        }
    }
    return "ID não localizado"
}

//Consulta nome a partir de um ID
function consultaNomePeloIDModoImperativo(id:number): string{
    for (let i = 0; i < lista.length; i++){
        if (lista[i].id === id){
            return lista[i].name
        }
    }
    return "ID não localizado"
}

//Apaga itemm a partir de um ID
function apagaItemPeloIDModoImperativo(id:number): void{
    for (let i = 0; i < lista.length; i++){
        if (lista[i].id === id){
            lista.splice(i,1)
            break
        }
    }
}

//Altera bio ou nome a partir do ID
function alteracaoPeloIDModoImperativo(id: number, novoNome?: string | null , novaBio?:string | null): void{
    let idEncontrado = false;

    for (let i = 0; i< lista.length; i++){
        if (lista[i].id == id){
            idEncontrado = true
            if (novoNome !== null && novoNome !== undefined){
                lista[i].name = novoNome
            }
            if (novaBio !== null && novaBio !== undefined){
                lista[i].bio = novaBio
            }            
            break;
        }
    }
    if(!idEncontrado){
        console.log(`ID não localizado`)
    }
}
    

// Demonstração
imprimirTodasBiografias()

console.log(`Bio: ${consultaBioPeloIDModoImperativo(1)}`) // bio de Ada Lovelace
console.log(`Nome: ${consultaNomePeloIDModoImperativo(2)}`) // Nome Alan Turing 

apagaItemPeloIDModoImperativo(1) // Apaga o item 1
imprimirTodasBiografias()

alteracaoPeloIDModoImperativo(3, "Charles Darwin", "Charles Darwin, foi um Naturalista que propôs a teoria da evolução através da seleção natural.")
imprimirTodasBiografias()