const isPrimo = (number) => {
    if(number === 1){
        return false
    }
    let divider = 2
    
    while(divider < number){
        console.log(`${number}/${divider}`)
        if(number % divider === 0){
            return false
        }
        divider++
    }

    return true
}

console.log(isPrimo(7))