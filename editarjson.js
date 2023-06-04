const clientList = require("./aula5.json")

const chaves = Object.keys(clientList)

function encontrar(lista, chave, valor){
    return lista.find((item) => item[chave].includes(valor));
}
const encontrado = encontrar(clientList,"nome","Carolina");
