/*
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

*/

function varBlockScope() {
    var x = 31

    if(true) {
        var x = 71
        console.log(x)
    }

    console.log(x)
}

function varClosureBlockScope() {
    var x = 31;

    (function(){
        //if(true){
            var x = 71
            console.log(`Teste ${x}`)
        //}
    })()

    console.log(x)
}

function letScope() {
    let x = 31

    if(true) {
        let x = 71
        console.log(x)
    }
    console.log(x)
}

varBlockScope()
varClosureBlockScope()
letScope()