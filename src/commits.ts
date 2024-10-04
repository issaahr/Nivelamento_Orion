interface AutorDoCommit {
    name: string;
    email: string;
    date: string;
}

interface DadosDoCommit {
    author: AutorDoCommit;
    message: string;
}

interface CommitDoGitHub {
    commit: DadosDoCommit;
}

/**
 * Função para formatar a data e hora de um commit.
 * 
 * @param dataString - Recebe a data que será formatada
 * @returns A data formatada no estilo 'dd/mm/yyyy hh:mm'
 */
function formatarDataHora(dataString: string): string {
    const data = new Date(dataString)
    const dia: string = String(data.getDate()).padStart(2, '0')
    const mes: string = String(data.getMonth() + 1).padStart(2, '0')
    const ano: number = data.getFullYear()
    const horas: string = String(data.getHours()).padStart(2, '0')
    const minutos: string = String(data.getMinutes()).padStart(2, '0')

    return `${dia}/${mes}/${ano} ${horas}:${minutos}`
}

/**
 * Busca os commits mais recentes do repositório especificado no GitHub para imprimir.
 * 
 * @async
 * @function buscarCommits
 * @returns Uma promessa que é resolvida quando os commits são encontrados e impressos.
 * @throws Vai enviar uma mensagem de erro ao console caso a busca falhe.
 */
async function buscarCommits(): Promise<void> {
    const url: string = 'https://api.github.com/repos/issaahr/Nivelamento_Orion/commits?sha=feature-3'
    try {
        const resposta: Response = await fetch(url)
        const commits: CommitDoGitHub[] = await resposta.json()
        imprimirCommits(commits)
    } catch (erro) {
        console.error('Falha ao buscar os commits:', erro)
    }
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
function imprimirCommits(commits: CommitDoGitHub[]): void {
    const listaDeCommits = document.getElementById('listaDeCommits') as HTMLUListElement | null
    
    if (listaDeCommits) { 
        commits.forEach(commit => {
            const itemDaLista: HTMLElement = document.createElement('li')            
            const dataFormatada: string = formatarDataHora(commit.commit.author.date)            
            itemDaLista.textContent = `Commit feito por ${commit.commit.author.name} em ${dataFormatada}: ${commit.commit.message}`
            listaDeCommits.appendChild(itemDaLista)
        })
    } else {
        console.error('A lista de commits não foi encontrada!')
    }
}

document.addEventListener('DOMContentLoaded', buscarCommits)
