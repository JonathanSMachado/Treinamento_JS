const nums = [1, 2, 3, 4, 5]

const resultado = nums.filter(function(elem){
    return elem > 2
})

console.log(resultado)


//Meu filter
Array.prototype.filter2 = function(callback) {
    const arr = []

    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            arr.push(this[i])
        }
    }

    return arr
}

const resultado2 = nums.filter2(function(elem){
    return elem > 2
})

console.log("Meu filter:", resultado2)