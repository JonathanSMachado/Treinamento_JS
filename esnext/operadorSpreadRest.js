//operador ... rest(juntar)/spread(espalhar)
//usar rest com parametro de função

//usar spread com objeto
const functionario = { nome: 'Maria', salario: 12348.99 }
const clone = {ativo: true, ...functionario }
console.log(clone)

//usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA, 'Jonathan']
console.log(grupoFinal)