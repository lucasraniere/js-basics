// Function Declaration

function soma(a, b) {
    return a + b
}

console.log(soma(3, 4))
console.log(soma(3)) // 3 + undefined = NaN (Not a number)

function soma2(a, b) {
    return a + (b || 0)
}

console.log(soma2(3, 4))
console.log(soma2(3))

function soma3(a, b=0) {
    return a+b
}

console.log(soma3(3, 4))
console.log(soma3(3))

// Coisas estranhas

console.log(NaN === NaN) // comparação entre NaN são sempre false

function executar(fn) {
    if(typeof fn === 'function') {
        fn()
    } else {
        console.log('Não é uma função')
    }
}

executar(soma3(5, 6))
executar(soma3, 2, 3)

// Function Expression

const soma4 = function (a, b) {
    return a+b
}