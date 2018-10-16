const pessoa = {
    nome: "Rebeca",
    idade: 2,
    peso: 13
}

console.log("Keys:", Object.keys(pessoa))
console.log("Values:", Object.values(pessoa))
console.log("Entries:", Object.entries(pessoa))

Object.entries(pessoa).forEach(element => {
    console.log("forEach:", element[0], element[1])
});

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log("forEach com Destructuring:", chave, valor)
});

Object.defineProperty(pessoa, "dataNascimento", {
    enumerable: true,
    writable: false,
    value: "01/12/2018"
})

console.log("Após defineProperty:", pessoa.dataNascimento)
console.log("Entries após defineProperty:", Object.entries(pessoa))
console.log("Keys 2:", Object.keys(pessoa))

//ES6
const dest = { a: 1 }
const o1 = {b:2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest, o1, o2)
console.log(obj)


Object.freeze(obj)
obj.c = "Teste"
console.log(obj)


for (var i in pessoa){
    console.log(i)
}