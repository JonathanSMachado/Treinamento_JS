const nums = [1, 2, 3, 4, 5]


function multiplicar(num){
    return num * 2
}

let resultado = nums.map(multiplicar)

console.log('Resultado MAP original:', resultado)

//Meu map
Array.prototype.map2 = function(callback) {
    if (typeof(callback) !== 'function') {
        throw new TypeError('Parametro deve ser uma função')
    }

    const arr = []

    for(let i = 0; i < this.length; i++) {
        arr.push(callback(this[i], i, this))
    }

    return arr
}

// Desta forma não exibe essa função (map3) no for in. Diferentemente de associar direto no Array.prototype
Object.defineProperty(Array.prototype, 'map3', {
    value: function(callback) {
        if (typeof(callback) !== 'function') {
            throw new TypeError('Parametro deve ser uma função')
        }
    
        const arr = []
    
        for(let i = 0; i < this.length; i++) {
            arr.push(callback(this[i], i, this))
        }
    
        return arr
    },
    configurable: true,
    writable: true,
})

let resultado2 = nums.map2(multiplicar)
console.log('Resultado do meu MAP2:', resultado2)

let resultado3 = nums.map3(multiplicar)
console.log('Resultado do meu MAP3:', resultado3)

console.log('\nvalores lidos no for...in:')
for (let i in nums) {
    console.log(i)
}