const fs = require('fs')

const caminho = __dirname +  '/arquivo.json'

// sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono
fs.readFile(caminho, 'utf-8', function(err, conteudo){
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.porta}`)
})

//através de require para JSON(sincrono) já vem como objeto
const config = require('./arquivo.json')
console.log(config.db)

// ler diretório
fs.readdir(__dirname, function(err, arquivos){
    console.log(arquivos)
})