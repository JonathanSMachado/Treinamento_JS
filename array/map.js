const nums = [1, 2, 3, 4, 5]


function multiplicar(num){
    return num * 2
}

let resultado = nums.map(multiplicar)

console.log(resultado)

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


let resultado2 = nums.map2(multiplicar)

console.log('Resultado do meu MAP:', resultado2)