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
const criarPessoa = function(nome) {
    return {
        falar: function() {
            console.log(`Olá ${nome}. Fui criado por uma 'Factory Function'`)
        }
    }
}

const p2 = criarPessoa("Jony")
p2.falar()

//Constructor Function
function criar(nome) {
    
    this.falar = function() {
        console.log(`Olá ${nome}. Fui criado por uma 'Constructor Function'`)
    }
}

const p3 = new criar("Jon")
p3.falar()