const clientList = require("./aula5.json")

const chaves = Object.keys(clientList)

function ordenarLista(lista,chave){
    return lista.sort((a,b) =>{
        if (a[chave] < b[chave]){
            return -1
        }
        if(a[chave] > b[chave]){
            return 1
        }
        else{
            return 0
        }
    })
}
const resultado = ordenarLista(clientList, "nome");

console.log(resultado)
