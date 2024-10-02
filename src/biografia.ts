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

const imprimirTodasBiografias = () => {
    lista.forEach(pessoa => {console.log(`ID: ${pessoa.id}, Nome: ${pessoa.name}, Bio: ${pessoa.bio}`)})
}

// Demonstração
imprimirTodasBiografias()

console.log(consultaBioPeloID(1)) // bio de Ada Lovelace
console.log(consultaNomePeloID(5)) //id não localizado
console.log(consultaNomePeloID(2)) // Nome Alan Turing 

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


 /*
    a) Crie uma função que retorne a bio do id passado
    b) Crie uma função que retorne o name do id passado
    c) Crie uma função que apague um item da lista a partir de um id passado
    d) Crie uma função que altere a bio ou o name a partir de um id passado
    e) Demonstre todas as funções com o paradigma funcional e com o imperativo
    */