const express = require('express')
const app = express()
const saudacao = require('./saudacaoMid')

app.use(saudacao('Jonathan'))

app.use('/api', (req, res, next) => {
    console.log('Antes...')
    next()
})

app.get('/api', (req, res, next) => {
    console.log('Durante...')
    //res.send('Estou bem!')
    res.status(200).json({
        data: {
            users: [
                {
                    name: 'Jonathan',
                    surname: 'Machado',
                    age: 33
                }, {
                    name: 'Adriene',
                    surname: 'Silva',
                    age: 31
                }, {
                    name: 'Isabeli',
                    surname: 'Machado',
                    age: 1
                }
            ]
        },
        statusCode: 200,
        errorCode: 0,
        statusMsg: 'OK'
    })
    next()
})

app.use('/api', (req, res) => {
    console.log('Depois...')
})

app.listen(3000, () => {
    console.log('Backend executando...')
})

