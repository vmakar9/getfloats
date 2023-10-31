let str = "3.14"
let reversedStr = str.split("").reverse().join()
let floatNumber = parseFloat(reversedStr.split('').reverse().join(''))
console.log(floatNumber)

