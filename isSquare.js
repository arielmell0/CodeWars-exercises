// Link do exercício:
// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

var isSquare = (n) => {
    if(n < 0) return false
    const sqr = Math.sqrt(n)
    const sqrInteger = Number.isInteger(sqr)

    if(sqrInteger) return true
    else return false
}

console.log(isSquare)
console.log(isSquare(0))