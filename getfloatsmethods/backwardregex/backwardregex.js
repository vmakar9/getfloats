//Задом на перед (використання регулярного виразу для видобуття числа)
let str = "4.665 is the number"
let reversedStr = str.split('').reverse().join('')
let match = reversedStr.match(/(\d+\.\d+)/)
if (match) {
    let floatNumber = parseFloat(match[1].split('').reverse().join(''));
    console.log(floatNumber); // 3.14
}