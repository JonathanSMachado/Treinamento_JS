const aprovados = ['Jonathan', 'João', 'Maria']

aprovados.forEach(function(elem, index){
    console.log(`Indice ${index} - Nome ${elem}`)
});

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = (aprovado, index) => console.log(`Nome: ${aprovado}. Código ${index}`)

aprovados.forEach(exibirAprovados)

aprovados.forEach((nome, index, arr) => console.log(`Nome: ${nome}, Indice: ${index}, Array: ${arr}`))