//Notação literal
const obj1 = {}
console.log(obj1)

//Object
const obj2 = new Object
console.log(obj2)

//Função contrutora
function Produto(nome, preco, desc) {
    this.nome = nome //atributo publico
    this.getPrecoComDesconto = function() {
        return preco * (1 - desc)
    }
}

const prod1 = new Produto("caneta", 7.99, 0.1)
const prod2 = new Produto("notebook", 2999.90, 0.15)

console.log(prod1.getPrecoComDesconto())
console.log(prod2.getPrecoComDesconto())

//Função Factory
function criarFunc(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario: function(){
            return (salarioBase / 30) * (30 - faltas)
        },
        getNome: function() {
            return this.nome
        }
    }
}

const func1 = criarFunc("Jonathan", 3000, 2)
const func2 = criarFunc("João", 2000, 5)
console.log(`Salário ${func1.getNome()}: ${func1.getSalario().toFixed(2)}`)
console.log(`Salário ${func2.getNome()}: ${func2.getSalario().toFixed(2)}`)

//Object Create
const filha = Object.create(null)
filha.nome = "Isa"
console.log(filha)

//Exemplo JSON.parse
const fromJSON = JSON.parse('{"info":"Sou um JSON","idade":32}')
console.log(fromJSON)
console.log(fromJSON.info)