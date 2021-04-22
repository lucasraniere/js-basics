function composicao(...funcoes) {
    // currying (lazy evaluation)
    return function(valor) { 
        return funcoes.reduce((acc, fn) => {
            return fn(acc)
        }, valor)
    }
}

function gritar(texto) {
    return texto.toUpperCase()
}

function enfatizar(texto) {
    return `${texto}!!!`
}

function tornarLento(texto) {
    return texto.split('').join(' ')
}

const exagerado = composicao(
    gritar, 
    enfatizar,
    tornarLento
)

console.log(exagerado('cuidado com o buraco'))
console.log(exagerado('pare'))

console.log(composicao(
    gritar, 
    enfatizar,
    tornarLento 
), ('eita'))