//Class
class Pessoa{
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`Olá ${this.nome}. Fui criado por uma 'Class'`);
    }
}

const p1 = new Pessoa("Jonathan")
p1.falar()

//Factory Function
function criarPessoa(nome) {
    let n = nome
    return {
        falar: function() {
            console.log(`Olá ${n}. Fui criado por uma 'Factory Function'`)
        }
    }
}

const p2 = criarPessoa("Jony")
p2.falar()

//Constructor Function
function Criar(nome) {
    let n = nome
    this.falar = function() {
        console.log(`Olá ${n}. Fui criado por uma 'Constructor Function'`)
    }
}

const p3 = new Criar("Jon")
p3.falar()