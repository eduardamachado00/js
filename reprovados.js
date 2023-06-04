//Depois de calcular a média dos alunos, precisamos mostrar quem está reprovado entre os alunos:

//Ana: 7
//Marcos: 4.5
//Maria: 8
//Mauro: 7,5

const alunos = ["Ana","Marcos", "Maria", "Mauro"];
const medias = [6,4.5,6,5.5];

const reprovados=alunos.filter((aluno,indice)=> {return medias[indice] < 7 })
console.log(reprovados)