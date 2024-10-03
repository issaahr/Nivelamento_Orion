"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var lista = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
/**
 * Imprime todas as biografias da lista no console.
 * Para cada pessoa na lista, esta função exibe o ID, nome e biografia.
 * @returns Não retorna nada (void)
 */
var imprimirTodasBiografias = function () {
    lista.forEach(function (pessoa) { console.log("ID: ".concat(pessoa.id, ", Nome: ").concat(pessoa.name, ", Bio: ").concat(pessoa.bio, " \n")); });
};
/*********************************
*   VERSÃO PARADIGMA FUNCIONAL   *
*********************************/
/**
 * Consulta a biografia de uma pessoa pelo ID.
 *
 * @param id - o ID da pessoa a ser consultada.
 * @returns A biografia da pessoa correspondente ao ID, ou `ID não localizado` se o ID não for encontrado.
 */
var consultaBioPeloID = function (id) {
    var pessoa = lista.find(function (item) { return item.id === id; });
    return pessoa ? pessoa.bio : "ID não localizado";
};
/**
 * Consulta o nome de uma pessoa pelo seu ID.
 *
 * @param  id - O ID da pessoa a ser consultada.
 * @returns O nome da pessoa correspondente ao ID fornecido, ou `ID não localizado` se o ID não for encontrado.
 */
var consultaNomePeloID = function (id) {
    var pessoa = lista.find(function (item) { return item.id === id; });
    return pessoa ? pessoa.name : "ID não localizado";
};
/**
 * Remove um item da lista pelo seu ID.
 *
 * @param id - O ID do item a ser removido.
 * @returns Uma nova lista sem o item com o ID especificado.
 */
var apagaItemPeloID = function (id) { return lista.filter(function (item) { return item.id !== id; }); };
/**
 * Altera o nome e/ou a biografia de uma pessoa na lista com base no ID fornecido. Caso ele exista.
 *
 * @param id - O ID da pessoa a ser alterada.
 * @param novoNome - O novo nome a ser atribuído à pessoa (opcional).
 * @param  novaBio - A nova biografia a ser atribuída à pessoa (opcional).
 * @returns Uma nova lista de pessoas com as alterações aplicadas.
 */
var alteracaoPeloID = function (id, novoNome, novaBio) {
    return lista.map(function (item) {
        if (item.id === id) {
            return __assign(__assign({}, item), { name: novoNome !== undefined ? novoNome : item.name, bio: novaBio !== undefined ? novaBio : item.bio });
        }
        return item;
    });
};
// Demonstração
imprimirTodasBiografias();
var idConsultaBio = 1;
console.log("Bio: ".concat(consultaBioPeloID(idConsultaBio))); // bio de Ada Lovelace
var idConsultaNome = 2;
console.log("Nome: ".concat(consultaNomePeloID(idConsultaNome))); // nome Alan Turing 
lista = apagaItemPeloID(4); // Apaga o item 4
imprimirTodasBiografias();
var idAlvoAtualizacao = 3;
var nomeAtualizado = "Albert Einstein";
var bioAtualizada = "Albert Einstein, foi um físico teórico que desenvolveu a teoria da relatividade e revolucionou a física moderna.";
lista = alteracaoPeloID(idAlvoAtualizacao, nomeAtualizado, bioAtualizada);
imprimirTodasBiografias();
/*********************************
*   VERSÃO PARADIGMA IMPERATIVO   *
*********************************/
/**
 * Consulta a biografia de uma pessoa pelo ID.
 *
 * @param id - o ID da pessoa a ser consultada.
 * @returns A biografia da pessoa correspondente ao ID, ou `ID não localizado` se o ID não for encontrado.
 */
function consultaBioPeloIDModoImperativo(id) {
    for (var i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            return lista[i].bio;
        }
    }
    return "ID não localizado";
}
/**
 * Consulta o nome de uma pessoa pelo seu ID.
 *
 * @param  id - O ID da pessoa a ser consultada.
 * @returns O nome da pessoa correspondente ao ID fornecido, ou `ID não localizado` se o ID não for encontrado.
 */
function consultaNomePeloIDModoImperativo(id) {
    for (var i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            return lista[i].name;
        }
    }
    return "ID não localizado";
}
/**
 * Apaga um item da lista pelo ID
 *
 * @param id - O ID do item que será removido.
 */
function apagaItemPeloIDModoImperativo(id) {
    for (var i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            lista.splice(i, 1);
            break;
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
function alteracaoPeloIDModoImperativo(id, novoNome, novaBio) {
    var idEncontrado = false;
    for (var i = 0; i < lista.length; i++) {
        if (lista[i].id == id) {
            idEncontrado = true;
            if (novoNome !== null && novoNome !== undefined) {
                lista[i].name = novoNome;
            }
            if (novaBio !== null && novaBio !== undefined) {
                lista[i].bio = novaBio;
            }
            break;
        }
    }
    if (!idEncontrado) {
        console.log("ID n\u00E3o localizado");
    }
}
// Demonstração
imprimirTodasBiografias();
console.log("Bio: ".concat(consultaBioPeloIDModoImperativo(1))); // bio de Ada Lovelace
console.log("Nome: ".concat(consultaNomePeloIDModoImperativo(2))); // Nome Alan Turing 
apagaItemPeloIDModoImperativo(1); // Apaga o item 1
imprimirTodasBiografias();
alteracaoPeloIDModoImperativo(3, "Charles Darwin", "Charles Darwin, foi um Naturalista que propôs a teoria da evolução através da seleção natural.");
imprimirTodasBiografias();
//# sourceMappingURL=biografia.js.map