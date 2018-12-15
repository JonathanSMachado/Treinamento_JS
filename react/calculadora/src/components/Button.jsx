import React from 'react'
import './Button.css'

export default props => {
    return (
        <button 
            className={ props.classes } 
            onClick={e => props.click && props.click(props.label)}>
            { props.label }
        </button>
    )
}