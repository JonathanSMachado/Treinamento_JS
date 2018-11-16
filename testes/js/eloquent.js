function printIntervalNumbers(start, end) {
    if(start > end) throw new Error('Start deve ser menor que End')
    
    for(let i = start; i <= end; i++) {

        if(isDivisibleBy3And5(i)){
            console.log('FizzBuzz')
        } else if (isDivisibleBy3(i)) {
            console.log('Fizz')
        } else if(isDivisibleBy5(i)) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}

function isDivisibleBy3(number) {
    return number !== 0 && number % 3 === 0
}

function isDivisibleBy5(number) {
    return number !== 0 && number % 5 === 0
}

function isDivisibleBy3And5(number) {
    return isDivisibleBy3(number) && isDivisibleBy5(number)
}

// printIntervalNumbers(0, 100)

// ************************************************
function printXadrezTab() {
    const size = 8
    let str = ''

    for(let i = 0; i < size; i++) {
        for(let x = 0; x < size; x++) {
            if( (i + x) % 2 === 0 ) {
                str += ' '
            } else {
                str += '#'
            }
        }
        console.log(str + '\n')
        str = ''
    }
}

// printXadrezTab()

// ***********************************************
function minNumber(number1, number2) {
    return number1 < number2 ? number1 : number1 > number2 ? number2 : 'empate'
}

// console.log(minNumber(1,10))

// ***********************************************
function isEvenRecursive(number) {
    if (number < 0) throw Error('Number should be positive')

    if (number === 0) {
        return true
    } else if (number === 1) {
        return false
    } else {
        return isEvenRecursive(number - 2)
    }
}

function isEven(number) {
    if(number < 0) throw new Error('Number should be positive')

    return number % 2 === 0
}

// console.log(isEven(75))

// ***********************************************
function countChar(string, charToCount) {
    let counter = 0

    for(let i = 0; i < string.length; i++) {
        if(string.charAt(i) === charToCount) {
            counter++;
        }
    }

    return counter
}

// console.log(countChar('kakkerlak', 'a'))

// ***********************************************
function range(start, end) {
    let arr = []
    
    let control = start;
    
    while(control <= end) {
        arr.push(control)
        control++
    }
    
    return arr
}

function sum(arr) {
    let sum = 0
    arr.forEach(element => {
        sum = sum + element
    });
    
    return sum
}

// console.log(sum(range(1,10)))

//inverte o conteúdo em um novo array e retorna esse novo array
function reverseArray(arr) {
    let arrReverse = []

    for(let i = 0; i < arr.length; i++) {
        arrReverse.unshift(arr[i])
    }

    return arrReverse
}

//inverte o conteúdo no proprio array de entrada
function reverseArrayInPlace(arr) {
    let aux = Math.floor(arr.length/2)
    
    for(let i = 0; i <= aux; i++) {
        let elem = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = arr[i]
        arr[i] = elem
    }
}

// console.log(reverseArray([1,2,3]))

var arr = [5,6,7, 8, 9, 10]
console.log(reverseArray(arr))
// reverseArrayInPlace(arr)
console.log(arr)

// ***********************************************
