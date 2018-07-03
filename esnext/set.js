//não aceita repetição/não indexada
const times = new Set()
times.add('Vasco')
times.add('Gremio').add('Internacional').add('Palmeiras')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('gremio'))
console.log(times.has('Gremio'))
times.delete('Palmeiras')
console.log(times)

const set = new Set(['Raquel', 'Lucas', 'João', 'Lucas'])
console.log(set)