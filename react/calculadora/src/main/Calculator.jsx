import React, { Component } from 'react'
import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

const SUM_OPERATOR = '+'
const DIV_OPERATOR = '/'
const SUB_OPERATOR = '-'
const MUL_OPERATOR = '*'

export default class Calculator extends Component {

    constructor(props) {
        super(props)
        this.addDigit = this.addDigit.bind(this)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
    }

    state = { ...initialState }

    resolveOperation() {
        const values = [...this.state.values]
        const operation = this.state.operation

        switch (operation) {
            case SUM_OPERATOR:
                return values[0] + values[1]

            case SUB_OPERATOR:
                return values[0] - values[1]

            case DIV_OPERATOR:
                return values[0] / values[1]

            case MUL_OPERATOR:
                return values[0] * values[1]

            default:
                return values[0]
        }
    }

    clearMemory() {
        this.setState({ ...initialState })
    }

    setOperation(operation) {
        if(this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            const equals = operation === '='
            const values = [...this.state.values]
            
            values[0] = this.resolveOperation()
            values[1] = 0
            
            this.setState({
                displayValue: values[0].toString(), 
                operation: equals ? null : operation, 
                current: equals ? 0 : 1, 
                clearDisplay: !equals, 
                values
            })

        }
    }

    addDigit(digit) {
        if (digit === '.' && this.state.displayValue.includes('.') && !this.state.clearDisplay) return

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + digit
        this.setState({ displayValue, clearDisplay: false })

        if (digit !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values })
        }
    }

    render() {
        return (
            <div className='calculator'>
                <Display value={ this.state.displayValue }/>
                <Button label='AC' click={ this.clearMemory } classes='button triple'/>
                <Button label='/' click={ this.setOperation } classes='button operation'/>
                <Button label='7' click={ this.addDigit } classes='button' />
                <Button label='8' click={ this.addDigit } classes='button'/>
                <Button label='9' click={ this.addDigit } classes='button'/>
                <Button label='*' click={ this.setOperation } classes='button operation'/>
                <Button label='4' click={ this.addDigit } classes='button'/>
                <Button label='5' click={ this.addDigit } classes='button'/>
                <Button label='6' click={ this.addDigit } classes='button'/>
                <Button label='-' click={ this.setOperation } classes='button operation'/>
                <Button label='1' click={ this.addDigit } classes='button'/>
                <Button label='2' click={ this.addDigit } classes='button'/>
                <Button label='3' click={ this.addDigit } classes='button'/>
                <Button label='+' click={ this.setOperation } classes='button operation'/>
                <Button label='0' click={ this.addDigit } classes='button double'/>
                <Button label='.' click={ this.addDigit } classes='button'/>
                <Button label='=' click={ this.setOperation } classes='button operation'/>
            </div>
        )
    }
}
