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

// const barreiras = new Barreiras(700, 1200, 200, 400)
// const areaDoJogo = document.querySelector('[wm-flappy')
// barreiras.getPares().forEach(par => areaDoJogo.appendChild(par.getElement()))

// setInterval(() => {
//     barreiras.animar()
// }, 20)