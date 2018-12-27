import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'

const headerProps = {
    title: 'Usuários - Base externa',
    icon: 'users',
    subtitle: 'Lista de usuários disponibilizada por https://reqres.in/'
}

const baseUrl = 'https://reqres.in/api/users'

const initialState = {
    user: {firstName: '', lastName: '', avatar: ''},
    listUsers: []
}

export default class UserCrudV2 extends Component {

    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl)
            .then(response => {
                const users = response.data.data.map(user => {
                    return {
                        id: user['id'],
                        firstName: user['first_name'],
                        lastName: user['last_name'],
                        avatar: user.avatar
                    }
                })
                this.setState({ listUsers: users})
            })
    }

    getUpdatedList(user, add = true) {
        const list = this.state.listUsers.filter(u => u.id !== user.id)
        if(add) list.push(user)
        return list
    }

    clearForm() {
        this.setState({ user: initialState.user})
    }

    save() {
        const user = this.state.user
        if (!user.firstName && !user.lastName) return

        const method = user.id ? 'put' : 'post'
        const url = `${baseUrl}`

        axios[method](url, user)
            .then(response => {
                console.log(response)
                const usr = { id: parseInt(response.data.id), firstName: user.firstName, lastName: user.lastName, avatar: user.avatar }
                const listUsers = this.getUpdatedList(usr)
                this.setState({user: initialState.user, listUsers})
            })
    }

    deleteUser(user) {
        const url = `${baseUrl}/${user.id}`
        axios.delete(url)
            .then(response => {
                if(response.status === 204) {
                    this.setState({ listUsers: this.getUpdatedList(user, false)})
                }
            })
    }

    loadUser(user) {
        this.setState({ user })
    }

    updateState(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="form-group">
                            <label htmlFor="firstName">Nome</label>
                            <input type="text"
                                className="form-control"
                                name="firstName" 
                                value={this.state.user.firstName}
                                onChange={e => this.updateState(e)}
                                placeholder="Informe o primeiro nome"/>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="form-group">
                            <label htmlFor="lastName">Sobrenome</label>
                            <input type="text"
                                className="form-control" 
                                name="lastName" 
                                value={this.state.user.lastName}
                                onChange={e => this.updateState(e)}
                                placeholder="Informe o sobrenome"/>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="form-group">
                            <label htmlFor="avatar">Avatar</label>
                            <input type="text"
                                className="form-control" 
                                name="avatar" 
                                value={this.state.user.avatar}
                                onChange={e => this.updateState(e)}
                                placeholder="URL do seu avatar"/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={() => this.save()}>
                            Salvar
                        </button>
                        <button className="btn btn-secondary ml-2"
                            onClick={() => this.clearForm()}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Primeiro Nome</th>
                        <th>Segundo Nome</th>
                        <th>Avatar</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.listUsers.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>
                        <img src={user.avatar} alt="Avatar" className="avatar"/>
                    </td>
                    <td>
                        <button className="btn btn-warning" 
                            onClick={() => this.loadUser(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger"
                            onClick={() => this.deleteUser(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}