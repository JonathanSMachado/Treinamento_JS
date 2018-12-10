import React from 'react'

const BoaNoite = props => <h1>Boa noite, {props.name}!</h1>
const BomDia = props => <h1>Bom dia, {props.name}!</h1>
const BoaTarde = props => <h1>Boa tarde, {props.name}!</h1>

const saudacaoDefault = props => <h1>Olá, {props && props.name ? props.name : ""}</h1>

export { BoaNoite, BoaTarde, BomDia }
export default saudacaoDefault