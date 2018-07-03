const axios = require('axios')
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

function isChina(elem){
    return elem.pais === 'China'
}

function isMulher(elem){
    return elem.genero === 'F'
}

function menorSalario(obj1, obj2){
    if(obj1 === null){
        return obj2
    }

    if(obj1.salario > obj2.salario){
        return obj2
    }

    return obj1
}

function printChinesaComMenorSalario(result){
    const data = result.data
    console.log(data.filter(isChina).filter(isMulher).reduce(menorSalario))
}

axios.get(url).then(printChinesaComMenorSalario)