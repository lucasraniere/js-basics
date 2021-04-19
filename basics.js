console.log('JavaScript Basicos') // console print

// variaveis
var a = 1
let b = 2
const c = a + b

a = 'teste'
const d = a + b

console.log(c)
console.log(d)

// operadores

// unarios
let n = 3
n++
console.log(n)
++n
console.log(n)

// binarios (aritmeticos, atribuiçao, relacionais, logicos)
let x = 2 + 3 // atribuição e aritmetico binario
let y = 4 % 2

a = 3
a += 3
a *= 7
console.log(a)

console.log(3 > 2)
console.log(!(3 < 2))

console.log(!' ')
console.log(!'')

// ternario
let temSol = true
let estouComDinheiro = false
let vouSair = temSol && estouComDinheiro // ou é ||

let resposta = vouSair ? 'Ebaaaaa!' : 'Que chato!' // if vou sair = true -> Ebaaaaa; else -> Que chato
console.log(resposta)

// estruturas de controle
let nota = 9
let temBomComportamento = true

if (nota >= 9 && temBomComportamento) {
    console.log('Quadro de Honra!')
    console.log('Parabéns!')
} else if(nota > 7) {
    console.log('Aprovado!')
} else {
    console.log('Recuperação!')
    console.log('É uma pena!')
}

// estruturas de repetição
for(let i = 0; i < 5; i++) {
    console.log(i)
}

// Array
const notas = [6.5, 7.7, 3.2, 8.1, 9.7]

for(let nota of notas) { // "for in" dá ruim com array, JavaScripto vacilão
    console.log(nota > 7 ? nota+' Aprovado' : nota+' Reprovado')
}

notas.forEach(nota => console.log(nota))