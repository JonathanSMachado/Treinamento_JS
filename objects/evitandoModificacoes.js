//Object.preventExtensions
const produto = Object.preventExtensions({
    nome: "Qualquer",
    preco: 1.99,
    tag: 'promocao'
})

console.log("Extensível: ", Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Teste descrição'
delete produto.tag

console.log(produto)

//Object.seal
const pessoa = {nome: 'Jonathan', idade: 32}
Object.seal(pessoa)
console.log("Selado: ", Object.isSealed(pessoa))

pessoa.sobrenome = 'Machado'
delete pessoa.nome
pessoa.idade = 88
console.log(pessoa)

//Object.freeze
const carro = {marca: 'GM', modelo: 'corsa', ano: 97}
console.log(carro)
Object.freeze(carro)
console.log("Congelado: ", Object.isFrozen(carro))
carro.marca = 'Fiat'
carro.consumo = 10
delete carro.ano
console.log(carro)