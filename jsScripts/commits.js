"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Função para formatar a data e hora de um commit.
 *
 * @param dataString - Recebe a data que será formatada
 * @returns A data formatada no estilo 'dd/mm/yyyy hh:mm'
 */
function formatarDataHora(dataString) {
    const data = new Date(dataString);
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    const horas = String(data.getHours()).padStart(2, '0');
    const minutos = String(data.getMinutes()).padStart(2, '0');
    return `${dia}/${mes}/${ano} ${horas}:${minutos}`;
}
/**
 * Busca os commits mais recentes do repositório especificado no GitHub para imprimir.
 *
 * @async
 * @function buscarCommits
 * @returns Uma promessa que é resolvida quando os commits são encontrados e impressos.
 * @throws Vai enviar uma mensagem de erro ao console caso a busca falhe.
 */
function buscarCommits() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://api.github.com/repos/issaahr/Nivelamento_Orion/commits';
        try {
            const resposta = yield fetch(url);
            const commits = yield resposta.json();
            imprimirCommits(commits);
        }
        catch (erro) {
            console.error('Falha ao buscar os commits:', erro);
        }
    });
}
/**
 * Imprime uma lista de commits do GitHub no HTML com o ID 'listaDeCommits'.
 *
 * @param commits - Um array de objetos CommitDoGitHub que serão exibidos.
 *
 * A função cria um item de lista para cada commit, exibindo o nome do autor, a mensagem do commit
 * e a data/hora em que o commit foi feito.
 * Se o elemento 'listaDeCommits' não for encontrado, um erro será registrado no console.
 */
function imprimirCommits(commits) {
    const listaDeCommits = document.getElementById('listaDeCommits');
    if (listaDeCommits) {
        commits.forEach(commit => {
            const itemDaLista = document.createElement('li');
            const dataFormatada = formatarDataHora(commit.commit.author.date);
            itemDaLista.textContent = `Commit feito por ${commit.commit.author.name} em ${dataFormatada}: ${commit.commit.message}`;
            listaDeCommits.appendChild(itemDaLista);
        });
    }
    else {
        console.error('A lista de commits não foi encontrada!');
    }
}
document.addEventListener('DOMContentLoaded', buscarCommits);
