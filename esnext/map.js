const tecnologias = new Map()
tecnologias.set('react', { framework: false})
tecnologias.set('angular', { framework: true})

console.log(tecnologias.get('react'))
console.log(tecnologias.get('angular').framework)

const chavesVariadas = new Map()

chavesVariadas.set(function() {}, 'função')
chavesVariadas.set({}, 'objeto')
chavesVariadas.set(123, 'valor')
chavesVariadas.set('string', 'string')

console.log(chavesVariadas)
console.log(chavesVariadas.size)
chavesVariadas.delete(123)
console.log(chavesVariadas.size)
console.log(chavesVariadas)