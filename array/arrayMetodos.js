const pilotos = ['Massa', 'Vettel', 'Hamilton', 'Alonso']

pilotos.pop() //remove último
console.log(pilotos)

pilotos.push('Verstappen') //adiciona no fim
console.log(pilotos)

pilotos.shift() //remove primeiro
console.log(pilotos)

pilotos.unshift('Leclerc') //adiciona no inicio
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Raikonem')
console.log(pilotos)

pilotos.splice(3, 1)
console.log(pilotos)

const newArr1 = pilotos.slice(2)
console.log(newArr1)

const newArr2 = pilotos.slice(1,3)
console.log(newArr2)