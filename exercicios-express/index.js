const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')
require('./api/produto')(app, 'Com param!')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(saudacao('Jonathan'))

app.use('/api', (req, res, next) => {
    console.log('Antes...')
    next()
})

app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo}, ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    // let corpo = ''
    // req.on('data', function(parte) {
    //     corpo += parte
    // })

    // req.on('end', function(){
    //     res.send(corpo)
    // })
    res.send(req.body)
})

app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
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

