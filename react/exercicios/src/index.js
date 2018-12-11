import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './componentes/Primeiro'
// import SaudacaoDefault, { BoaTarde, BoaNoite, BomDia } from './componentes/Saudacoes'
import SaudacaoClass from './componentes/SaudacaoClass'

// const element = <h1>Iniciando com React</h1>
// ReactDOM.render(<Primeiro />, document.getElementById('root'))

// ReactDOM.render(<BomDia name='Jonathan'/>, document.getElementById('root'))
// ReactDOM.render(<BoaNoite name='Jonathan'/>, document.getElementById('root'))
// ReactDOM.render(<BoaTarde name='Jonathan'/>, document.getElementById('root'))
// ReactDOM.render(<SaudacaoDefault name='Jonathan'/>, document.getElementById('root'))

ReactDOM.render(<SaudacaoClass name='Jonathan' type='Bom dia'/>, document.getElementById('root'))