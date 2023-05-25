const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];
// Crie uma função que recebe como argumento o nome de um aluno.
// Verifique se o aluno está presente na lista e retorne a média final que se encontra no mesmo índice.
// Caso o nome do aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado.

function encontrarMedia(aluno){
    if (listaDeAlunosEMedias[0].includes(aluno)){
        const [alunos, medias] = listaDeAlunosEMedias
        const indiceAluno = alunos.indexOf(aluno)
        const media = medias[indiceAluno]
        console.log(`A média de ${aluno} é ${media} `)
    } else {
        console.log(`Estudante não encontrado!`)
    }
}

encontrarMedia("João");