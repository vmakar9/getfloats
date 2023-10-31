let str = "The price is $3.14 for a coffee"
let match = str.match(/(\d+\.\d+)/);
if(match){
    let floatNumber = parseFloat(match[1])
    console.log(floatNumber)
}
