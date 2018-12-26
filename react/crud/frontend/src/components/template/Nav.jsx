import './Nav.css'
import React from 'react'
import NavItem from './NavItem'

export default props => {
    return <aside className="menu-area">
        <nav className="menu">
            <NavItem destination="/" icon="home" label="Início"/>
            <NavItem destination="/users" icon="users" label="Usuários"/>
        </nav>        
    </aside>
}