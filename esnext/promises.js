function printAfterOf(seconds, content) {
    return new Promise(function(resolve, reject) {
        if (!content) {
            reject('Content is obligatory')
        }
        setTimeout(function(){
            const name = 'Jonathan'
            resolve(name.concat(' ').concat(content))
        }, seconds * 1000)
    })
}

const content = 'Como vai?'

printAfterOf(3, content)
    .then(function(result){
        console.log(result)
    })
    .catch(function(error){
        console.log(error)
    })