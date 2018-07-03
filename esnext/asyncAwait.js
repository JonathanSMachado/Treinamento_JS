const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
            
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

//Recurso do ES8
//Objetivo simplificar o uso de Promise
let obterAlunos = async () => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    
    return [].concat(ta, tb, tc)
} // retorna um objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))



const fetch = require('node-fetch')



//Promise
function getPerson(id) {
    fetch(`https://swapi.co/api/people/${id}`)
        .then(response => response.json())
        .then(person => console.log(`Personagem obtido com Promise: ${person.name}`))
}

getPerson(1)

//Async/Await
async function printPersonName(id) {
    const response = await fetch(`https://swapi.co/api/people/${id}`)
    const person = await response.json()
    console.log(`Personagem obtido com Async/Await: ${person.name}`)
}

printPersonName(1)

//Async/Await retornando Promise
async function getPersonA(id) {
    const response = await fetch(`https://swapi.co/api/people/${id}`)
    const person = await response.json()
    return person
}

getPersonA(1)
    .then(person => console.log(`Personagem obtido com Async/Await retornando Promise: ${person.name}`))