import React from 'react'
import './Door.css'
import Gift from './Gift'

export default class Door extends React.Component {
    state = {
        open: false,
        selected: false
    }
    
    render() {
        return (
            <div class="door-area">
            <div class="door-frame">
                <Gift />
            </div>
            <div class="door" >
                <div class="number"> </div>
                <div class="knob"> </div>
                </div>
            </div>
        )
    }
}