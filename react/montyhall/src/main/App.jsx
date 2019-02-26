import React from 'react'
import './App.css'
import Door from '../components/Door'

export default class App extends React.Component {
    render() {
        return (
            <div id="app">
                <h1>Problema de Monty Hall</h1>
                <Door />
            </div>
        )
    }
}