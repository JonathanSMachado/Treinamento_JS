function newElement(tagName, className) {
    const element = document.createElement(tagName)
    element.className = className

    return element;
}

// class Barreira {
//     constructor(reversa = false) {
//         this.element = newElement('div', 'barreira')
//         this.borda = newElement('div', 'borda')
//         this.corpo = newElement('div', 'corpo')

//         this.buildBarreira(reversa)
//     }

//     buildBarreira(reversa) {
//         this.element.appendChild(reversa ? this.corpo : this.borda)
//         this.element.appendChild(reversa ? this.borda : this.corpo)
//     }

//     setHeight(height) {
//         this.corpo.style.height = `${height}px`
//     }
// }

function Barreira(reversa = false) {
    const element = newElement('div', 'barreira')
    const borda = newElement('div', 'borda')
    const corpo = newElement('div', 'corpo')

    element.appendChild(reversa ? corpo : borda)
    element.appendChild(reversa ? borda : corpo)

    this.getElement = () => element
    this.setHeight = height => corpo.style.height = `${height}px`
}

// const b = new Barreira(true)
// b.setHeight(200)
// document.querySelector('[wm-flappy]').appendChild(b.getElement())

function ParDeBarreiras(altura, abertura, x) {
    const element = newElement('div', 'par-de-barreiras')
    const superior = new Barreira(true)
    const inferior = new Barreira(false)

    element.appendChild(superior.getElement())
    element.appendChild(inferior.getElement())

    this.getElement = () => element
    this.getSuperior = () => superior
    this.getInferior = () => inferior

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        superior.setHeight(alturaSuperior)
        inferior.setHeight(alturaInferior)
    }

    this.getX = () => parseInt(element.style.left.split('px')[0])
    this.setX = x => element.style.left = `${x}px`
    this.getWidth = () => element.clientWidth

    this.sortearAbertura()
    this.setX(x)
}

// const b = new ParDeBarreiras(700, 200, 400)
// document.querySelector('[wm-flappy').appendChild(b.getElement())

function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
    const pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3),
    ]

    const deslocamento = 3

    this.getPares = () => pares

    this.animar = () => {
        this.getPares().forEach(par => {
            par.setX(par.getX() - deslocamento)

            if(par.getX() < -par.getWidth()) {
                par.setX(par.getX() + espaco * this.getPares().length)
                par.sortearAbertura()
            }

            const meio = largura / 2

            const cruzouMeio = par.getX() + deslocamento >= meio && par.getX() < meio

            if(cruzouMeio) {
                notificarPonto()
            }
        });
    }
}

function Passaro(alturaDoJogo) {
    let voando = false

    const element = newElement('img', 'passaro')
    element.src = 'imgs/passaro.png'

    this.getElement = () => element

    this.getY = () => parseInt(element.style.bottom.split('px')[0])
    this.setY = y => element.style.bottom = `${y}px`

    window.onkeydown = e => voando = true
    window.onkeyup = e => voando = false

    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5)
        const alturaMaxima = alturaDoJogo - this.getElement().clientHeight

        if(novoY <= 0) {
            this.setY(0)
        } else if(novoY >= alturaMaxima) {
            this.setY(alturaMaxima)
        } else {
            this.setY(novoY)
        }
    }

    this.setY(alturaDoJogo / 2)
}

function Progresso() {
    const element = newElement('span', 'progresso')

    this.atualizarPontos = pontos => {
        element.innerHTML = pontos
    }

    this.getElement = () => element
    this.atualizarPontos(0)
}

// const barreiras = new Barreiras(700, 1200, 400, 400)
// const passaro = new Passaro(700)
// const areaDoJogo = document.querySelector('[wm-flappy]')
// areaDoJogo.appendChild(passaro.getElement())
// areaDoJogo.appendChild(new Progresso().getElement())
// barreiras.getPares().forEach(par => areaDoJogo.appendChild(par.getElement()))

// setInterval(() => {
//     barreiras.animar()
//     passaro.animar()
// }, 20)

function estaoSobrepostos(elementA, elementB) {
    const a = elementA.getBoundingClientRect()
    const b = elementB.getBoundingClientRect()

    const horizontal = a.left
}

function FlappyBird() {
    let pontos = 0

    const areaDoJogo = document.querySelector('[wm-flappy]')
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

    const progresso = new Progresso()
    const barreiras = new Barreiras(altura, largura, 200, 400, 
        () => progresso.atualizarPontos(++pontos))

    const passaro = new Passaro(altura)

    areaDoJogo.appendChild(progresso.getElement())
    areaDoJogo.appendChild(passaro.getElement())
    barreiras.getPares().forEach(par => areaDoJogo.appendChild(par.getElement()))

    this.start = () => {
        const temporizador = setInterval(() => {
            barreiras.animar()
            passaro.animar()
        }, 20)
    }

}

new FlappyBird().start()