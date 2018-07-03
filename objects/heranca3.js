const pai = {
    nome: "João",
    corCabelo: 'Preto'
}

const filha1 = Object.create(pai)

filha1.nome = 'Ana'

console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
    console.log(key)
}

for (let key in filha2) {
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
}