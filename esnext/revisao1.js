// let e const
{
    var a = 2
    let b = 3
    console.log(`B dentro do bloco ${b}`)
}
console.log(a)
//console.log(`B fora do bloco ${b}`)

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = {nome: 'Jonathan', idade: 32, sexo: 'M'}
console.log(i, nome)