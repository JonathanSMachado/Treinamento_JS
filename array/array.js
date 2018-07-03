console.log(typeof Array)
console.log(typeof new Array)
console.log(typeof [])

let aprovados = new Array('Bia', 'Jonathan', 'João')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados)
console.log(aprovados[0])

aprovados[3] = 'Paulo'
console.log(aprovados[3])

aprovados.push('Jurubeba')
console.log(aprovados)

aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']

aprovados.splice(1, 1)
console.log(aprovados)

aprovados.splice(1, 0, 'Elemento1', 'Elemento2')
console.log(aprovados)