// write program to for returning sum of n natural numbers
// it takes n time for travesing and summing up
function getSumOfNumbers(x) {
    let sum = 0
    for(let i = 0; i <= x; i++) {
        sum += i
    }
    return sum
}
// uses the the AP logic -> as everything happens once so it takes constant time
function sumOfAP(x) {
    return x * ((x - 1)/2)
}
const answerOne = getSumOfNumbers(5349378973987298)
const answerTwo = sumOfAP(5349378973987298)
console.log(answerOne)
console.log(answerTwo)