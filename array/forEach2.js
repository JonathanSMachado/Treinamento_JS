//Minha implementação de forEach
function forEach2(callback) {
    if (typeof(callback) !== 'function') {
        throw new TypeError('Parametro deve ser uma função')
    }
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

Array.prototype.forEach2 = forEach2

const aprovados = ['Jonathan', 'João', 'Maria']

aprovados.forEach2(function(elem, index, arr){
    console.log(`Indice ${index} - Nome ${elem} - Arr: ${arr}`)
});