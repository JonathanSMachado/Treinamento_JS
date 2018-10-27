import './modulos/moduloA'

export default class Pessoa {
    constructor(name) {
        this.name = name
    }

    cumprimentar() {
        return `Olá ${this.name}. Tudo bem?`
    }
}