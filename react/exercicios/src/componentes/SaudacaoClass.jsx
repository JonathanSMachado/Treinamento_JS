import React, { Component } from 'react'

export default class SaudacaoClass extends Component {

    state = {
        type: this.props.type,
        name: this.props.name
    }

    setType(_type) {
        this.setState({type: _type})
    }

    setName(_name) {
        this.setState({name: _name})
    }

    render() {
        const { type, name } = this.state
        return (
            <div>
                <h1>{ type } { name }</h1>
                <input type='text' value={type} placeholder='Tipo...' 
                    onChange={e => this.setType(e.target.value)}/>
                <input type='text' value={name} placeholder='Nome...' 
                    onChange={e => this.setName(e.target.value)}/>
            </div>
        )
    }
}