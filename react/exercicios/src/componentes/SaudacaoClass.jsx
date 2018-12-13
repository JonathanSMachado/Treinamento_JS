import React, { Component } from 'react'

export default class SaudacaoClass extends Component {

    state = {
        type: this.props.type,
        name: this.props.name
    }

    constructor(props) {
        super(props)
        this.setType = this.setType.bind(this)
    }

    //recebendo o evento para setar o tipo no state
    setType(e) {
        this.setState({ type: e.target.value })
    }

    //recebendo direto o nome para seta-lo no state
    setName(_name) {
        this.setState({name: _name})
    }

    render() {
        const { type, name } = this.state
        return (
            <div>
                <h1>{ type } { name }</h1>
                <input type='text' value={type} placeholder='Tipo...' 
                    onChange={this.setType}/>
                <input type='text' value={name} placeholder='Nome...' 
                    onChange={e => this.setName(e.target.value)}/>
            </div>
        )
    }
}