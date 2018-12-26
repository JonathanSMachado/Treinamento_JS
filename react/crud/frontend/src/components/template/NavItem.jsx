import React from 'react'
import './NavItem.css'
import { Link } from 'react-router-dom'

export default props => {
    return <Link to={props.destination}>
        <i className={`fa fa-${props.icon}`}></i> {props.label}
    </Link>
}