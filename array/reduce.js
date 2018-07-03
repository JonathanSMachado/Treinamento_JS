const nums = [1, 2, 3, 4, 5]

const resultado = nums.reduce(function(acum, elem){
    return acum + elem
}, 0)

console.log(resultado)


//Meu reduce
Array.prototype.reduce2 = function(callback, initialValue) {
    let acum = initialValue? initialValue : null

    for(let i = 0; i < this.length; i++) {
        acum = callback(acum, this[i], i, this)
    }

    return acum
}

const resultado2 = nums.reduce2(function(acum, elem){
    return acum + elem
}, 0)

console.log("Meu reduce:", resultado2)