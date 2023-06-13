const numbers = Object.keys(new Array(1001).fill(null)).map(Number)

function isPrimeNumber(number) {
    if(number < 2) {
        return false
    }
    for (let divisor = number - 1; divisor >= 2; divisor--) {
        if(number % divisor === 0) {
            return false
        }                
    }    
    return true
}

const primeNumbers = numbers.filter(number => {
    if(isPrimeNumber(number)) return number
})

console.log(primeNumbers)