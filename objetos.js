let aluno = {
    nome: "João",
    turma: 81,
    email: "joao@edu.com"   
}

aluno = {
    ...aluno,
    aa: "Artes",
    bc: "Life",
    eb: "Bonecos de Pano",
}
aluno.ea = "storytelling"

let chaves = Object.keys(aluno)

console.log(aluno.nome)


//console.log(aluno.eletivas.cc)
