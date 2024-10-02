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
/*********************************
*   VERSÃO PARADIGMA FUNCIONAL   *
*********************************/
//Consulta bio a partir do ID
var consultaBioPeloID = function (id) {
    var pessoa = lista.find(function (item) { return item.id === id; });
    return pessoa ? pessoa.bio : "ID não localizado";
};
//Consulta nome a partir do ID
var consultaNomePeloID = function (id) {
    var pessoa = lista.find(function (item) { return item.id === id; });
    return pessoa ? pessoa.name : "ID não localizado";
};
//Apaga item a partir do ID
var apagaItemPeloID = function (id) { return lista.filter(function (item) { return item.id !== id; }); };
//Altera bio ou o nome a partir do ID
var alteracaoPeloID = function (id, novoNome, novaBio) {
    return lista.map(function (item) {
        if (item.id === id) {
            return __assign(__assign({}, item), { name: novoNome !== undefined ? novoNome : item.name, bio: novaBio !== undefined ? novaBio : item.bio });
        }
        return item;
    });
};
var imprimirTodasBiografias = function () {
    lista.forEach(function (pessoa) { console.log("ID: ".concat(pessoa.id, ", Nome: ").concat(pessoa.name, ", Bio: ").concat(pessoa.bio)); });
};
// Demonstração
imprimirTodasBiografias();
console.log(consultaBioPeloID(1)); // bio de Ada Lovelace
console.log(consultaNomePeloID(5)); //id não localizado
console.log(consultaNomePeloID(2)); // Nome Alan Turing 
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
/*
   a) Crie uma função que retorne a bio do id passado
   b) Crie uma função que retorne o name do id passado
   c) Crie uma função que apague um item da lista a partir de um id passado
   d) Crie uma função que altere a bio ou o name a partir de um id passado
   e) Demonstre todas as funções com o paradigma funcional e com o imperativo
   */ 
//# sourceMappingURL=biografia.js.map