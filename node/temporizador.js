const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 10 * * *', function () {
    console.log(`Executando tarefa 1!`, new Date().getSeconds())
})

setTimeout(function() {
    tarefa1.cancel()
    console.log(`Cancelando tarefa1`)
}, 20000)

const regra = new schedule.RecurrenceRule()
//regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 10
regra.minute = 58

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log(`Executando tarefa 2!`, new Date().getSeconds())
})

const tarefa3 = schedule.scheduleJob({hour: 11, minute: 12}, function(){
    console.log(`Iniciando tarefa 3 as 11:12`)
})