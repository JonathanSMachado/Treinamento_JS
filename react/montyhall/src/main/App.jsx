import React from 'react'
import './App.css'
import Gift from '../components/Gift'

export default class App extends React.Component {
    render() {
        return (
            <div id="app">
                <h1>Problema de Monty Hall</h1>
                <Gift />
            </div>
        )
    }
}