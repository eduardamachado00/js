const clientList = require("./aula5.json")

const chaves = Object.keys(clientList)

function filtrarApartamentoSemComplemento(lista){
    return lista.filter((cliente) =>{
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"))
    })
}
const encontrado = filtrarApartamentoSemComplemento(clientList);
const n = encontrado.length
const nomes = []
let i=0
encontrado.forEach((a) => {nomes.push(encontrado[i].nome); i++})
console.log(nomes)
console.log(`Existem ${n} usuários que moram em apartamentos e que não informaram o complemento: ${nomes}`)