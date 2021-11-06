findPrimes([20, 4, 7, 8, 9])
isFriendNumbers(17296, 18416)
calculatePrimes()

let perfectNumber = 496
console.log(perfectNumber + " sayısı mükemmel sayı mı? "+ (isPerfectNumber(perfectNumber) ? "evet" : "hayır"))

function isPerfectNumber(number) {
    return sum(calculatePDN(number)) === (number)
}

function calculatePrimes(until = 1000) {
    for (let i = 0; i < until; i++) {
        console.log("'"+ i + "' Asal mı: " + (isPrime(i) === true ? "evet" : "hayır"))
    }
}

function findPrimes(numbers) {
    for (let n in numbers) {
        if (isPrime(n)) {
            console.log(n + " is prime")
        } else {
            console.log(n + " is not prime")
        }
    }
}

function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0)
            return false
    }
   return true
}

function isFriendNumbers(number1, number2) {
    if (sum(calculatePDN(number1)) === number2 && sum(calculatePDN(number2)) === number1) {
        console.log(number1, number2, "Arkadaş sayı")
    } else {
        console.log(number1, number2, "Arkadaş sayı değil!")
    }
}

function calculatePDN(number) {
    let numbers = []
    for (let i = 0; i < number; i++) {
        if (number % i === 0) {
            numbers.push(i)
        }
    }
    return numbers
}

function sum(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + parseInt(numbers[i])
    }
    return sum
}
